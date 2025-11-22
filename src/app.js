import http from 'http'
import crypto from 'crypto'

const generateSalt = (length = 16, encoding = 'hex') => {
    try {
        const salt = crypto.randomBytes(length);
        return salt.toString(encoding);
    } catch (error) {
        console.error('Error generating salt:', error);
        throw new Error('Failed to generate salt');
    }
};

const createPasswordHash = async (password, salt) => {
    const hashPassword = crypto.createHash('md5').update(Buffer.from(password)).digest('hex') + salt;
    console.log(password, hashPassword)
    return hashPassword;
};

const httpServer = http.createServer(async (req, res) => {

    const { method, url } = req

    if (method === "GET" && url == "/create-hash") {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.on('end', async () => {
            const jsonData = JSON.parse(body)
            const { password } = jsonData

            const salt = generateSalt(16, 'hex');
            const hashPassword = await createPasswordHash(password, salt)

            res.end(JSON.stringify({ message: { hashPassword, salt } }))
        })
    }
    else if (method === "POST" && url == "/match-hash") {
        let body = ''
        req.on("data", chunk => {
            body += chunk.toString()
        })
        req.on('end', async () => {
            const jsonData = JSON.parse(body)
            const { password, hashedPass, salt } = jsonData
            const hashPassword = await createPasswordHash(password, salt)
            if (!(hashPassword == hashedPass)) {
                res.end(JSON.stringify({ message: "mismatched password" }))
                return
            }
            res.end(JSON.stringify({ message: "password matched" }))
        })
    }
})

httpServer.listen(8080, () => {
    console.log("server is listening on port 8080")
})
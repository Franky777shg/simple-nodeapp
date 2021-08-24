const express = require('express')
const cors = require('cors')
const PORT = 2000

const server = express()

server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).send('<h1>Wellcome to My API Deployed in VM :)</h1>')
})

server.listen(PORT, () => console.log(`Server is Running at PORT : ${PORT}`))
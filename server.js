const http = require('http')

const PORT = 5001

try {
    const server = http.createServer((req, res) => {
        if(req.url === '/') {
            res.statusCode = 200;
            res.end("Hello World")
        }
    })
    
    server.listen(PORT, () => console.log(`Server started on Port: ${PORT}`))
}
catch(err) {
    console.log(err)
}
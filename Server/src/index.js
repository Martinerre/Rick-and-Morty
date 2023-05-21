var http = require("http");
const data = require ("./utils/data")

const port = 3001;

http.createServer((req, res) => {
    console.log(`Servidor ok en puerto ${port}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    if (url === '/rickandmorty/character') {
        const urlId = parseInt(url.split('/').pop())
        let char = data.find((elem) => elem.id === urlId)

        if (char) {
            res
                .writeHead(200, { 'Content-Type': 'application/json' })
                .end(JSON.stringify(char));
        }
    }
}).listen(port, 'localhost');
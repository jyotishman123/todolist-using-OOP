const fs = require("fs");
const http = require("http");

const template = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const app = fs.readFileSync(`${__dirname}/app.js`, "utf-8");
 


 

const server = http.createServer((req, res) => {


    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(template);
        res.write(`<script>${app}</script>`);
        res.end();

    }

   
})


server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port 8000");
  });
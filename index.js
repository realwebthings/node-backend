import http from 'http';

import { getAllMethods } from './modules/helper.js';

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;



const server = http.createServer((req, res) => {
    const { url } = req;
    console.log(getAllMethods(req))
    console.log("===========", url)
    res.statusCode = 200;
    res.setHeader('ContentType', 'text/plain');
    res.end('Hello World!');
});



server.listen(port, hostname, (url) =>{
    console.log(`Node server is running on ${url}`);
})

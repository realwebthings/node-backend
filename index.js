import http from 'http';
import assert from 'assert/strict';
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('ContentType', 'text/plain');
    res.end('Hello World!');
});



server.listen(port, hostname, (url) =>{
    assert.equal(url, undefined);
    const a = new assert.AssertionError({
        actual: url,
        expected: 'undefined',
        operator: 'equal'
    });
    console.log(a);
    console.log(`Node server is running on ${url}`);
})

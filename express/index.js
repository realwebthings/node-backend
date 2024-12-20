import express from 'express';

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World once again!!');
});

app.listen(port, hostname, (url) =>{
    console.log(`Express server is running on ${url}`);
})
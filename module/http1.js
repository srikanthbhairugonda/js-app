
const http = require('http');
const PORT=3000;
const server = http.createServer((request, response) => {
    response.write('my name is srikanth');
    response.end();
});

server.listen(PORT, () => {
    console.log('Server is listening on port 3000');
});
const jsonServer = require('json-server'); //get oackge
const server = jsonServer.create();//create server
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middleware);
server.use(router);

server.listen(port);
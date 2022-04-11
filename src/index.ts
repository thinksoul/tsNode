import "reflect-metadata";
import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
import {createKoaServer, useContainer} from "routing-controllers";
import { UserController } from './controllers/UserController';
import {db_connect} from './db/dbconnect'
import {UserStore} from './repository/UserStore'
 
const server: Server = createKoaServer({
    cors: true,
    routePrefix: '/api',
    controllers: [UserController]
})

const hostname: string = "127.0.0.1";
const port: number = 3000;

server.listen(port, hostname, () => {
    db_connect();
    //UserStore.createTable();
    console.log(`Server running at http://${hostname}:${port}/`);
})
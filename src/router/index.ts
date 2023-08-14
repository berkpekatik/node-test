import express from 'express';
import authentication from './authentication';
import users from './users';
import customers from './customers';

const router = express.Router();

export default (): express.Router=> {
    authentication(router);
    users(router);
    customers(router);
    return router;
}
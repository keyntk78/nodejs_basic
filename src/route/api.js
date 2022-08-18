import express, { Router } from 'express';
import APIController from '../controller/APIController';

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/user', APIController.getAllUser); // method Get
    router.post('/create-user', APIController.createNewUser); // method Post
    router.put('/update-user', APIController.updateUser); // method put
    router.delete('/delete-user/:id', APIController.deleteUser);


    return app.use('/api/v1/', router);
} 

export default initAPIRoute;
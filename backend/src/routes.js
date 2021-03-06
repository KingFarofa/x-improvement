import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import EventController from './app/controllers/EventController';
import EmployeeController from './app/controllers/EmployeeController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/events', EventController.index);

routes.post('/employees', EmployeeController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/events', EventController.store);
routes.put('/events', EventController.update);

routes.delete('/employees/:idEmployee/:idEvent', EmployeeController.delete);

export default routes;
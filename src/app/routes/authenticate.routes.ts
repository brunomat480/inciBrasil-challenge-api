import { Router } from 'express';
import authenticateUser from '../modules/accounts/useCases/authenticateUser';

const authenticateRouter = Router();

authenticateRouter.post("/sessions", authenticateUser);

export { authenticateRouter }

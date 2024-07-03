import costumerRouter from '@modules/customers/routes/costumers.routes';
import sessionRouter from '@modules/users/routes/session.routes';
import userRouter from '@modules/users/routes/user.routes';
import {Router} from 'express';

const router = Router();

router.use('/users', userRouter);
router.use('/sessions', sessionRouter);
router.use('/costumers', costumerRouter);

export default router;
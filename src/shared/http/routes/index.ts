import anamneseRouter from '@modules/anamnese/routes/anamnese.routes';
import costumerRouter from '@modules/customers/routes/costumers.routes';
import procedureRouter from '@modules/procedures/routes/procedures.routes';
import sessionRouter from '@modules/users/routes/session.routes';
import userRouter from '@modules/users/routes/user.routes';
import {Router} from 'express';

const router = Router();

router.use('/users', userRouter);
router.use('/sessions', sessionRouter);
router.use('/costumers', costumerRouter);
router.use('/procedures', procedureRouter);
router.use('/anamnese', anamneseRouter);


export default router;
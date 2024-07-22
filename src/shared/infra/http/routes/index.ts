
import costumerRouter from '@modules/costumers/infra/http/routes/costumer.routes';
import procedureRouter from '@modules/procedures/infra/http/routes/procedure.routes';
import {Router} from 'express';

const router = Router();

// router.use('/users', userRouter);
// router.use('/sessions', sessionRouter);
router.use('/costumers', costumerRouter);
router.use('/procedures', procedureRouter);


export default router;
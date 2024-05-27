import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json('app on');
})

export default router;

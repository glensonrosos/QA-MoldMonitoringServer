import express from 'express';

import { addDelivery,getDeliveriesByMoldId} from '../controllers/delivery.js'

const router = express.Router();

router.post('/:id/addDelivery',addDelivery);
router.get('/:id/getDeliveriesByMoldId',getDeliveriesByMoldId);

export default router;     
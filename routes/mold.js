import express from 'express';

import { createMold,getMolds,getMoldsByItemId,editMoldWithId} from '../controllers/mold.js'

const router = express.Router();

router.get('/',getMolds);
router.post('/:id/createMold',createMold);
router.get('/:id/getMoldsByItemId',getMoldsByItemId);
router.patch('/:id/editMoldWithId',editMoldWithId)

export default router;     
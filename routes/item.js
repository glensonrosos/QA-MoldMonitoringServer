import express from 'express';

import { getItems,createItem,editItem} from '../controllers/item.js'

const router = express.Router();

router.get('/',getItems);
router.post('/',createItem)
router.patch('/:id/editItem',editItem);

export default router;     
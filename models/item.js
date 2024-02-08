import mongoose, { Schema } from 'mongoose';

const itemSchema = mongoose.Schema({
    code:{ type: String, unique: true, required: true, dropDups: true},
    description:String,
    supplierId: Schema.Types.ObjectId,
    buyerId: Schema.Types.ObjectId,
    materialId: Schema.Types.ObjectId,
    createdAt:Date,
    updatedAt:Date,
    deletedAt:Date,
    lastEditdBy:String,
});

const Item = mongoose.model('Item',itemSchema);

export default Item;
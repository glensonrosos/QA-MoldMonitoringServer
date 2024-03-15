import mongoose, { Schema } from 'mongoose';

const deliverySchema = mongoose.Schema({
    itemId: Schema.Types.ObjectId,
    moldId: Schema.Types.ObjectId,
    delivery: Date,
    accept: Number,
    reject:Number,
    poNumber:String,
    qty:Number,
    remarks:String,
    createdAt:Date,
    updatedAt:Date,
    deletedAt:Date,
    lastEditdBy:String
});

const Delivery = mongoose.model('Delivery',deliverySchema);

export default Delivery;
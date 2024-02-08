import mongoose, { Schema } from 'mongoose';

const deliverySchema = mongoose.Schema({
    itemId: Schema.Types.ObjectId,
    moldId: Schema.Types.ObjectId,
    deliveryDate: Date,
    accepted: Number,
    rejected:Number,
    purchPoNumber:String,
    Remarks:String,
    createdAt:Date,
    updatedAt:Date,
    deletedAt:Date,
});

const Delivery = mongoose.model('Delivery',deliverySchema);

export default Delivery;
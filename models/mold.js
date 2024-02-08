import mongoose, { Schema } from 'mongoose';

const moldSchema = mongoose.Schema({
    code:{ type: String, unique: true, required: true, dropDups: true},
    itemId: Schema.Types.ObjectId,
    validationDate: Date,
    life: Number,
    condition:{
        name:String,
        code:Number
    },
    percentRejected: Number,
    lastEditdBy:String,
    Remarks:String,
    createdAt:Date,
    updatedAt:Date,
    deletedAt:Date,
});

const Mold = mongoose.model('Mold',moldSchema);

export default Mold;
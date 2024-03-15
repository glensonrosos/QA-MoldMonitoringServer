import mongoose, { Schema } from 'mongoose';

const moldSchema = mongoose.Schema({
    moldNumber: String,
    itemId: {
      _id: Schema.Types.ObjectId,
      name:String,
    },
    validationDate: Date,
    life: Number,
    delivered: Number,
    condition:{
        name:String,
        label:String,
        color:String,
    },
    threshold:Number,
    lastEditdBy:String,
    remarks:String,
    createdAt:Date,
    updatedAt:Date,
    deletedAt:Date,
});

const Mold = mongoose.model('Mold',moldSchema);

export default Mold;
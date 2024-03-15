import mongoose, { Schema } from 'mongoose';

const itemSchema = mongoose.Schema({
    itemCode:{ type: String, unique: true, required: true, dropDups: true},
    itemDescription:String,
    supplier:{
        _id : Schema.Types.ObjectId,
        name:String,
    } ,
    buyer:{
        _id : Schema.Types.ObjectId,
        name:String,
    },
    material:{
        _id : Schema.Types.ObjectId,
        name:String,
    },
    createdAt:Date,
    updatedAt:Date,
    deletedAt:Date,
    lastEditdBy:String,
});

const Item = mongoose.model('Item',itemSchema);

export default Item;
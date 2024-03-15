
import Mold from "../models/mold.js";
import Delivery from "../models/delivery.js";
import mongoose from "mongoose";


export const createMold = async (req,res)=>{

    const { id} = req.params;
    const newMold = req.body;

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('invalid item code');

    try{

        const checkMolds = await Mold.find({'itemId._id':id});

       // Check if any mold with the same itemCode exists
        const isDuplicateItemCode = checkMolds.some(m => m.moldNumber === newMold.moldNumber);
        if (isDuplicateItemCode) {
            return res.status(200).json({message:'duplicate'});
        }

        const newMoldObject = await new Mold(newMold);
        newMoldObject.delivered = 0;
        newMoldObject.createdAt = new Date().toISOString();
        newMoldObject.updatedAt = new Date().toISOString();
        newMoldObject.deletedAt = null;

        await newMoldObject.save();
        return res.status(201).json(newMoldObject);
    }catch(error){
        console.log(error);
        return res.status(404).json({message: error});
    }
}

export const getMolds = async (req,res)=>{
    try{
        const molds = await Mold.find();
        return res.status(200).json(molds);
    }catch(error){
        return res.status(404).json({message: error});
    }
}

export const getMoldsByItemId = async (req,res)=>{

    const { id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('invalid item code ');
    try{

         // START - get all deliveries and get sum of qty delivered.
        const deliveries = await Delivery.aggregate([
        {
            $group: {
            _id: "$moldId",
            totalQty: { $sum: "$qty" }
            }
        }
        ]);
        

        await Promise.all(deliveries.map(async (delivery) => {
            const { _id: moldId, totalQty } = delivery;
            await Mold.updateOne(
                { _id: moldId },
                { $set: { delivered: totalQty } }
            );
        }));
         // END - get all deliveries and get sum of qty delivered.

        const molds = await Mold.find({'itemId._id':id});
        return res.status(200).json(molds);
    }catch(error){
        return res.status(404).json({message: error});
    }
}

export const editMoldWithId = async (req,res)=>{

    const { id} = req.params;
    const editedMold = req.body;

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('invalid item code');

    try{
        const updatedMold = await Mold.
        findByIdAndUpdate({_id:id},{
                ...editedMold,
                updatedAt:new Date().toISOString(),
            },{new:true});  

        return res.status(201).json(updatedMold);

    }catch(error){
        console.log(error);
        return res.status(404).json({message: error});
    }
}

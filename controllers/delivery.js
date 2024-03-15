import Delivery from "../models/delivery.js";
import mongoose from "mongoose";


export const addDelivery = async (req,res)=>{

    const { id} = req.params;
    const newDelivery = req.body;

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('invalid item code');

    try{

        const newDelObject = await new Delivery(newDelivery);
        newDelObject.createdAt = new Date().toISOString();
        newDelObject.updatedAt = new Date().toISOString();
        newDelObject.deletedAt = null;

        await newDelObject.save();
        return res.status(201).json(newDelObject);
    }catch(error){
        console.log(error);
        return res.status(404).json({message: error});
    }
}


export const getDeliveriesByMoldId = async (req,res)=>{

    const {id:_id} = req.params;

    try{
        const deliveries = await Delivery.find({moldId:_id});
        return res.status(200).json(deliveries);
    }catch(error){
        return res.status(404).json({message: error});
    }
}

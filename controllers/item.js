import Item from "../models/item.js";
import mongoose from "mongoose";

export const getItems = async (req,res)=>{
    try{
        const items = await Item.find();
        res.status(200).json(items);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createItem = async (req,res)=>{
    const item = req.body;
    try{
        const newItem = await new Item(item);
        newItem.createdAt = new Date().toISOString();
        newItem.updatedAt = new Date().toISOString();
        newItem.deletedAt = null;

        await newItem.save();
        res.status(201).json(newItem);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const editItem = async (req,res) =>{

    const { id:_id } = req.params;
    const {itemDescription,supplier,buyer,material,lastEditdBy} = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('no item exist with that id');

    try{
        const editedItem = await Item.
            findByIdAndUpdate(_id,{itemDescription,supplier,buyer,material,_id,
                updatedAt:new Date().toISOString(),
                lastEditdBy 
            },{new:true});

        res.json(editedItem);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

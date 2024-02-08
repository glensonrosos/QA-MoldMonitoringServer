import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import buyerRoutes from './routes/buyer.js';
import materialRoutes from './routes/material.js';
import supplierRoutes from './routes/supplier.js';

const app = express();

// http://localhost:5000/purchaseOrder/

app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

// Configure CORS
app.use(cors({
    origin: true, // Allow requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
    credentials: true, // Enable credentials (e.g., cookies, authorization headers)
  }));



const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb://127.0.0.1:27017/moldmonitoring";

//works bellow
//const CONNECTION_URL = "mongodb://host.docker.internal:27017/ordercommitment";


mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT,() => console.log(`Server running on port: ${PORT} !!`)))
    .catch((error) => console.log(error.message));


app.use('/oc/buyers',buyerRoutes);
app.use('/oc/materials',materialRoutes);
app.use('/oc/suppliers',supplierRoutes);

// DOCKER
//https://www.youtube.com/watch?v=rOTqprHv1YE
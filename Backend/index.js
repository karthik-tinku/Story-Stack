import express from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/booksroute.js';
import cors from 'cors';
import {PORT, mongodbURL} from './config.js';


const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{

    console.log(req);
    return res.status(234).send("Welcome To MERN Stack Tutoriaal ");
});
app.use('/books', booksRoute);

mongoose
  .connect(mongodbURL)
  .then(()=>{
    console.log('App connected to databse');
    app.listen(PORT, ()=>{
        console.log(`App is listeniing to port : ${PORT}`);
    });
  })
  .catch((error)=>{
    console.log(error);
  });
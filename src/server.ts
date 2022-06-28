import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


// import cors from 'cors';
dotenv.config();
var app = express();
app.use(express.json());
// app.use(cors());

//mongo db connection
mongoose
    .connect(process.env.MONGO_URL || '')
    .then(() => console.log('mogo coonected'))
    .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
    console.log('app running on '+process.env.PORT);
});

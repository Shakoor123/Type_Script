import Auther from '../models/Auther';
import mongoose from 'mongoose';
import { NextFunction } from 'express';

const crateAuther = (req: Request, res: Response, next: NextFunction) => {
    const auther = new Auther({
        _id: new mongoose.Types.ObjectId(),
        name: req.body
    });
    return auther
        .save()
        .then((auther) => res.status(201).json({ auther }))
        .catch((err) => res.status(500).json({ err }));
};
const readAuther = (req: Request, res: Response,next:NextFunction) => {
    const userId = req.params.id;
    return Auther.findById(userId)
        .then((auther) => {
            auther ? (res.status(200).json(auther);
        }))
        .catch((err) => {
            res.status(500).json(err);
        });
};
const readAllAuther = (req: Request, res: Response, next: NextFunction) => {
    
    return Auther.find()
        .then((authers) => {
            authers ? (res.status(200).json(authers);
        }))
        .catch((err) => {
            res.status(500).json(err);
        });
};
const UpdateAuther = (req: Request, res: Response, next: NextFunction) => {
     const userId = req.params.id;
    return Auther.findById(userId)
        .then((auther) => {
           if(auther){
            auther.set(req.body);
            return auther.save()
            .then((auther) => {
            auther ? (res.status(200).json(auther);
        }))
        .catch((err) => {
            res.status(500).json(err);
        });

           }else{
            res.status(401).json({{message:"not found"}});
           }
        }))
        .catch((err) => {
            res.status(500).json(err);
        });
};
const DeleteAuther = (req: Request, res: Response, next: NextFunction) => {
    const autherId=req.params.id;
    return Auther.findByIdAndDelete(autherId)
    .then((auther)=>(auther?res.status(201).json(auther):res.status(404)))
    .catch((err)=>res.status(500).json(err));
};

export default {crateAuther,readAuther,readAllAuther,UpdateAuther,DeleteAuther};
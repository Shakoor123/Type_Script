import Auther from '../models/Auther';
import mongoose from 'mongoose';

const crateAuther = (req: Request, res: Response) => {
    const auther = new Auther({
        _id: new mongoose.Types.ObjectId(),
        name: req.body
    });
    return auther
        .save()
        .then((auther) => res.status(201).json({ auther }))
        .catch((err) => res.status(500).json({ err }));
};
const readAllAuther = (req: Request, res: Response) => {};
const UpdateAuther = (req: Request, res: Response) => {};
const DeleteAuther = (req: Request, res: Response) => {};

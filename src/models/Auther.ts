import mongoose from 'mongoose';

const AutherShema = new mongoose.Schema({
    name: { type: String }
});
export default mongoose.model('Auther', AutherShema);

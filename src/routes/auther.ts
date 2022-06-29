import express from 'express';
import controller from '../controllers/Auther;


const router=express.Router();

router.post('/create',controller.crateAuther);
router.get('/get/:autherId',controller.readAuther);
router.get('/get',controller.readAllAuther);
router.patch('/update/:autherId',controller.UpdateAuther);
router.delete('/delete/:autherId',controller.DeleteAuther);

exports=router;
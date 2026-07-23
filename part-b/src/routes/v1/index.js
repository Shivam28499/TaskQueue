import express from 'express';
import {createTask, getTask, getTasks, deleteTask, updateTask, NextTask} from '../../controllers/index.js'; 
import { createTaskValidator,updateStatusValidator,taskIdValidator } from '../../../validators/index.js';
import validateRequest from '../../middlewares/index.js';
const router  = express.Router();

router.get('/tasks/:id',taskIdValidator,validateRequest,getTask);
router.get('/tasks',getTasks);
router.post('/tasks',createTaskValidator, validateRequest, createTask);
router.patch('/tasks/:id/status',updateStatusValidator,validateRequest,updateTask);
router.delete('/tasks/:id',taskIdValidator,validateRequest,deleteTask);
router.get('/task/next',NextTask);

export default router;
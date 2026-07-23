import Service from '../services/index.js';
const taskService = new Service();

export async function createTask(req,res) {
    try {
        const response = await taskService.createTask(req.body);
        return res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Task not created',
            data: {},
            error: error.message
        });
    }
}

export async function getTask(req,res) {
    try {
        const response = await taskService.getTask(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Task get successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Task not get',
            data: {},
            error: error.message
        });
    }
}

export async function getTasks(req,res) {
    try {
        const response = await taskService.getTasks(req.query);
        return res.status(200).json({
            success: true,
            message: 'Tasks get successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Tasks not get',
            data: {},
            error: error.message
        });
    }
}

export async function deleteTask(req,res) {
    try {
        const response = await taskService.deleteTask(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Task deleted successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Task not deleted',
            data: {},
            error: error.message
        });  
    }
}

export async function updateTask(req,res) {
    try {
        const response = await taskService.updateTask(req.params.id,req.body);
        return res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Task not updated',
            data: {},
            error: error.message
        });
    }
}

export async function NextTask(req,res) {
    try {
        const response = await taskService.NextTask();
        return res.status(200).json({
            success: true,
            message: 'Get Next Task Successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Next recommended task fetched successfully",
            data: {},
            error: error.message
        });
    }
}

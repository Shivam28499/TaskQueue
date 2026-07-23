import TaskRepository from "../repositories/index.js";

const taskRepository = new TaskRepository();

class Service {
    async createTask(data) {
        try {
            const response = await taskRepository.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async  getTask(id) {
        try {
            const response = await taskRepository.get(id);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getTasks(filter) {
        try {
            const response = await taskRepository.getAll(filter);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async  deleteTask(id) {
        try {
            const response = await taskRepository.destroy(id);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async updateTask(id,data) {
        try {
            const response = await taskRepository.update(id,data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async NextTask() {
        try {
            const response = await taskRepository.NextTask();
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default Service;

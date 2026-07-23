import CrudRepository from "./crud-repository.js";
import db from "../models/index.js";
import { Sequelize, where} from "sequelize";
const { taskQueue } = db;

class TaskRepository extends CrudRepository {
    constructor(){
        super(taskQueue);
    }

    async NextTask(){
        try {
            const response = await taskQueue.findOne({
                where: {
                    status: "pending"
                },
                order: [
                    [
                        Sequelize.literal(`
                            CASE priority 
                                WHEN 'critical' THEN 1
                                WHEN 'high' THEN 2
                                WHEN 'medium' THEN 3
                                WHEN 'low' THEN 4
                            END
                            `),
                            "ASC"
                    ],
                        ["due_date", "ASC"],
                        ["createdAt","ASC"]
                ]
            })
            return response;
        } catch (error) {
            throw error;
        }
    }
    
}

export default TaskRepository;

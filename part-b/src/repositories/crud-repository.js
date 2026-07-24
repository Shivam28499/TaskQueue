import { where } from "sequelize";

class CrudRepository {
     constructor(model){
        this.model = model;
    }

    async create(data){ 
            const response = await this.model.create(data);
            return response;
    }

    async destroy(data){
                const task = await this.model.findByPk(data);

                if (!task) {
                    throw new Error("Task not found");
                }
                const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            if(!response){
                throw new Error('Something is wrong here');
            }
            return response;
    }

    async get(data){
            const response = await this.model.findByPk(data);
            if(!response){
               throw new Error('Task not found');
            }
            return response;
    }

    async getAll(filter = {}){
            const response = await this.model.findAll({
                where: filter
            });
            return response;
    }

    async update(id,data){ // data = {col : value}
            const task = await this.model.findByPk(id);

            if (!task) {
                throw new Error("Task not found");
            }
            if(!data || !data?.status){
                throw new Error("status is required");
            }
            task.status = data?.status;
            task.save();
            return task;
    }

}

export default CrudRepository;
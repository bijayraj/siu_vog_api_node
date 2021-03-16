const BaseService = require("./base.service");
const db = require('../database/sequelize');
const {
    paginate
} = require('../helpers/dbUtils');



class UserExerciseService extends BaseService {

    constructor() {
        super(db.UserExercise);
    }

    async create(params) {
        try {
            const mObj = await this.model.create(params,{
                include:[{
                    model:db.User
                }]
            });
            return mObj;
        } catch (exception) {
            throw exception;
        }
    }

    async getByUserId(id){
        const obj = await this.model.findAll({
            where:{
                user_id: id
            },
            include: [db.Exercise]
       });

       return obj;
    }

    async getOne(id, include = []) {
        const attributeRequired = ['id', 'name', 'nameNepali'];
        const obj = await this.model.findByPk(id, {
            include: [{
                model: db.Batch,
                required: true,
                attributes: attributeRequired,
                include: [{
                    model: db.Program,
                    required: true,
                    attributes: attributeRequired,
                    include: [{
                        model: db.Department,
                        required: true,
                        attributes: attributeRequired
                    }]
                }]
            }]
        });
        return obj;
    }


    async list(page, pageSize, include = []) {
        const where = {};
        //Check where and construct the where query here!
        
        const obj = await this.model.findAll({
            include: include,
            ...paginate({
                page,
                pageSize
            })
        });

        return obj;
    }


    async addExerciseToUser(userId, exerciseId){
        
        const user = await db.User.findByPk(userId);
        const exercise = await db.Exercise.findByPk(exerciseId);
        const obj = user.addExercise(exercise);

        return obj;

    }





}

module.exports = new UserExerciseService()
const httpStatus = require('http-status');
const db = require('../database/sequelize');
const userExerciseService = require('../services/user-exercise.service');
const APIError = require('../helpers/APIError');
const UserExercise = db.UserExercise;


class UserExerciseController {

    async create(req, res) {
        try {
            const dept = await userExerciseService.create(req.body);
            res.json(dept);
        } catch (exception) {
            throw exception
        }
    }

    async list(req, res) {
        const page = req.query.page;
        const pageSize = req.query.pageSize;
        const depts = await  userExerciseService.list(page, pageSize, [db.Exercise]);
        res.json(depts);
    }

    async update(req, res) {
        const dept = await userExerciseService.update(req.params.id, req.body);
        res.json(dept);
    }

    async get(req, res) {
        const dept = await userExerciseService.getOne(req.params.id);
        res.json(dept);
    }

    async remove(req, res) {
        const dept = await userExerciseService.delete(req.params.id);
        res.json({
            message: `Object with id ${req.params.id} deleted!`
        });
    }

    async getByUser(req,res){
        const depts = await userExerciseService.getByUserId(req.params.id);
        res.json(depts);
    }



    async addUserExercise(req,res){
        const depts = await userExerciseService.addExerciseToUser(req.body.user_id, req.body.exercise_id);
        res.json(depts);
    }

}

module.exports = new UserExerciseController()
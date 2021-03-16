const Sequelize = require("sequelize");
const {
    Joi
} = require("express-validation");

class Exercise extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            exerciseType: {
                type: DataTypes.STRING,
                field: 'exercise_type',
                allowNull: false,
                defaultValue:'normal'
            },
            title: {
                type: DataTypes.STRING,
                field: 'title',
                allowNull: false
            },
            subTitle: {
                type: DataTypes.STRING,
                field: 'sub_title'
            },
            details: {
                type: DataTypes.TEXT,
                field: 'details',
                allowNull: false
            },
            difficulty: {
                type: DataTypes.INTEGER,
                field: 'difficulty',
                defaultValue: 1
            },
            duration: {
                type: DataTypes.INTEGER,
                field: 'duration',
                defaultValue: 10
            },
            minDuration: {
                type: DataTypes.INTEGER,
                field: 'min_duration',
                defaultValue: 0
            },
            maxDuration: {
                type: DataTypes.INTEGER,
                field: 'max_duration',
                defaultValue: 10
            },
          
            imageUrl: {
                type: DataTypes.STRING,
                field: 'image_url'
            },
            videoUrl:{
                type: DataTypes.STRING,
                field: 'video_url'
            },
            recordingUrl:{
                type: DataTypes.STRING,
                field: 'recording_url'
            },
            icon:{
                type: DataTypes.STRING,
                field: 'icon'
            }
            
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    }

    static associate(models) {
        this.hasMany(models.UserExercise);
        this.belongsToMany(models.User, {through: models.UserExercise});
    }

    //This is used in route validation! 
    static get validationCreate() {
        const joiObj = Joi.object({
            title: Joi.string().required(),
            subTItle: Joi.string(),
            exerciseType: Joi.string().required(),
            details: Joi.string().required(),
            difficulty: Joi.number(),
            duration: Joi.number(),
            maxDuration: Joi.number(),
            minDuration: Joi.number(),
            imageUrl: Joi.string(),
            videoUrl: Joi.string(),
            icon: Joi.string()
        });
        return joiObj;
    }

}

module.exports = Exercise
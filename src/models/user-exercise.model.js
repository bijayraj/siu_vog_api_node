const Sequelize = require("sequelize");

class UserExercise extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },            
            duration: {
                type: DataTypes.INTEGER,
                field: 'duration',
                defaultValue: 10
            },
            times:{
                type: DataTypes.INTEGER,
                field: 'times',
                defaultValue: 1
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
        this.belongsTo(models.User);
        this.belongsTo(models.Exercise);
        
    }

   

}

module.exports = UserExercise
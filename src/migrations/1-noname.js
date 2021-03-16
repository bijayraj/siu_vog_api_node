'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "exercises", deps: []
 * createTable "members", deps: []
 * createTable "users", deps: []
 * createTable "refresh_tokens", deps: [users]
 * createTable "user_exercises", deps: [exercises, users]
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2021-03-16T00:24:17.147Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
            fn: "createTable",
            params: [
                "exercises",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true
                    },
                    "exerciseType": {
                        "type": Sequelize.STRING,
                        "defaultValue": "normal",
                        "allowNull": false,
                        "field": "exercise_type"
                    },
                    "title": {
                        "type": Sequelize.STRING,
                        "allowNull": false,
                        "field": "title"
                    },
                    "subTitle": {
                        "type": Sequelize.STRING,
                        "field": "sub_title"
                    },
                    "details": {
                        "type": Sequelize.TEXT,
                        "allowNull": false,
                        "field": "details"
                    },
                    "difficulty": {
                        "type": Sequelize.INTEGER,
                        "defaultValue": 1,
                        "field": "difficulty"
                    },
                    "duration": {
                        "type": Sequelize.INTEGER,
                        "defaultValue": 10,
                        "field": "duration"
                    },
                    "minDuration": {
                        "type": Sequelize.INTEGER,
                        "defaultValue": 0,
                        "field": "min_duration"
                    },
                    "maxDuration": {
                        "type": Sequelize.INTEGER,
                        "defaultValue": 10,
                        "field": "max_duration"
                    },
                    "imageUrl": {
                        "type": Sequelize.STRING,
                        "field": "image_url"
                    },
                    "videoUrl": {
                        "type": Sequelize.STRING,
                        "field": "video_url"
                    },
                    "recordingUrl": {
                        "type": Sequelize.STRING,
                        "field": "recording_url"
                    },
                    "icon": {
                        "type": Sequelize.STRING,
                        "field": "icon"
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "members",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true
                    },
                    "firstName": {
                        "type": Sequelize.STRING,
                        "allowNull": false,
                        "field": "first_name"
                    },
                    "lastName": {
                        "type": Sequelize.STRING,
                        "allowNull": false,
                        "field": "last_name"
                    },
                    "firstNameNepali": {
                        "type": Sequelize.STRING,
                        "field": "first_name_nepali"
                    },
                    "lastNameNepali": {
                        "type": Sequelize.STRING,
                        "field": "last_name_nepali"
                    },
                    "dob": {
                        "type": Sequelize.DATEONLY,
                        "field": "dob"
                    },
                    "startDate": {
                        "type": Sequelize.DATEONLY,
                        "field": "start_date"
                    },
                    "endDate": {
                        "type": Sequelize.DATEONLY,
                        "field": "end_date"
                    },
                    "photoUrl": {
                        "type": Sequelize.STRING,
                        "field": "photo_url"
                    },
                    "description": {
                        "type": Sequelize.TEXT,
                        "field": "description"
                    },
                    "email": {
                        "type": Sequelize.STRING,
                        "field": "email",
                        "unique": true
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "users",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true
                    },
                    "username": {
                        "type": Sequelize.STRING,
                        "field": "username",
                        "unique": true,
                        "allowNull": false
                    },
                    "password": {
                        "type": Sequelize.STRING,
                        "field": "password",
                        "allowNull": false
                    },
                    "memberId": {
                        "type": Sequelize.INTEGER,
                        "field": "member_id"
                    },
                    "role": {
                        "type": Sequelize.STRING,
                        "field": "role"
                    },
                    "verificationToken": {
                        "type": Sequelize.STRING,
                        "field": "verification_token"
                    },
                    "resetToken": {
                        "type": Sequelize.STRING,
                        "field": "reset_token"
                    },
                    "resetTokenExpiry": {
                        "type": Sequelize.DATE,
                        "field": "reset_token_expiry"
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "refresh_tokens",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "token": {
                        "type": Sequelize.STRING,
                        "field": "token"
                    },
                    "expiryDate": {
                        "type": Sequelize.DATE,
                        "field": "expiry_date"
                    },
                    "createdByIp": {
                        "type": Sequelize.STRING,
                        "field": "created_by_ip"
                    },
                    "revokedDate": {
                        "type": Sequelize.DATE,
                        "field": "revoked_date"
                    },
                    "revokedByIp": {
                        "type": Sequelize.STRING,
                        "field": "revoked_by_ip"
                    },
                    "replacedByToken": {
                        "type": Sequelize.STRING,
                        "field": "replaced_by_token"
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    },
                    "UserId": {
                        "type": Sequelize.INTEGER,
                        "field": "user_id",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "users",
                            "key": "id"
                        },
                        "allowNull": true
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "user_exercises",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true
                    },
                    "duration": {
                        "type": Sequelize.INTEGER,
                        "defaultValue": 10,
                        "field": "duration"
                    },
                    "times": {
                        "type": Sequelize.INTEGER,
                        "defaultValue": 1,
                        "field": "times"
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    },
                    "ExerciseId": {
                        "type": Sequelize.INTEGER,
                        "unique": "user_exercises_UserId_ExerciseId_unique",
                        "field": "exercise_id",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "exercises",
                            "key": "id"
                        },
                        "allowNull": true
                    },
                    "UserId": {
                        "type": Sequelize.INTEGER,
                        "allowNull": true,
                        "field": "user_id",
                        "onUpdate": "CASCADE",
                        "onDelete": "CASCADE",
                        "references": {
                            "model": "users",
                            "key": "id"
                        },
                        "unique": "user_exercises_UserId_ExerciseId_unique"
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
            fn: "dropTable",
            params: ["exercises", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["members", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["refresh_tokens", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["user_exercises", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["users", {
                transaction: transaction
            }]
        }
    ];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};

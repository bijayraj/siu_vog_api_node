'use strict';
const bcrypt = require('bcryptjs');
const crypto = require('crypto');


module.exports = {
    up: async (queryInterface, Sequelize) => {
        const password = bcrypt.hashSync('admin', 10);
        const vToken = crypto.randomBytes(40).toString('hex');
        await queryInterface.bulkInsert('users', [{
            username: 'admin',
            password: password,
            first_name:'Bijay Raj',
            last_name: 'Paudel',
            occupation:'Student',
            organization: 'SIU',
            role: 'Admin',
            verification_token: vToken,
            created_at: new Date(),
            updated_at: new Date()
        }], {});


    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', [{
            username: 'admin'
        }], {});

    }
};
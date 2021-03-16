const express = require('express');
const userExerciseCtrl = require('../controllers/user-exercise.controller');
const authorize = require('../helpers/authorize');
const router = express.Router();
const Role = require('../models/role')


router
    .route('/')
    .get(userExerciseCtrl.list)
    /** POST /api/exercises Create new exercise */
    .post(authorize(Role.Admin), userExerciseCtrl.create);

/**
 * @swagger
 * path:
 *  /user-exercise:
 *    get:
 *      summary: Gets a list of all exercises limited by page and pagesize
 *      security:
 *          - BearerAuth: []
 *      tags: [UserExercise]
 *      parameters:
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *            default: 0
 *          description: Page number to start from default is 0
 *        - in: query
 *          name: pageSize
 *          schema:
 *            type: integer
 *            default: 30
 *          description: Limit the number of items in each page. Default is 30
 *      responses:
 *        "200":
 *          description: Got the exercises
 *          content:
 *            application/json:
 *              schema:
 *                type: "array"
 *                items:
 *                  $ref: '#/components/schemas/Exercise'
 */

/**
 * @swagger
 * path:
 *  /user-exercise:
 *    post:
 *      summary: Creates Exercise
 *      tags: [UserExercise]
 *      security:
 *          - BearerAuth: []           
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                  - name
 *                  - nameNepali
 *              properties:
 *                  name:
 *                      type: string
 *                  nameNepali:
 *                      type: string
 *                  description:
 *                      type: string
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Exercise'
 */

/**
 * @swagger
 * path:
 *  /user-exercise/{id}:
 *    get:
 *      summary: Gets a exercise by id
 *      security:
 *          - BearerAuth: []
 *      tags: [UserExercise]
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of exercise"
 *            required: true
 *            type: "integer"
 *            format: "int64"
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Exercise'
 */


/**
 * @swagger
 * path:
 *  /user-exercise/{id}:
 *    put:
 *      summary: Updates the exercise
 *      tags: [UserExercise]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of exercise"
 *            required: true
 *            type: "integer"
 *            format: "int64"          
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                  - name
 *                  - nameNepali
 *              properties:
 *                  name:
 *                      type: string
 *                  nameNepali:
 *                      type: string
 *                  description:
 *                      type: string
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Exercise'
 */

/**
 * @swagger
 * path:
 *  /user-exercise/{id}:
 *    delete:
 *      summary: Deletes a exercise by id
 *      security:
 *          - BearerAuth: []
 *      tags: [UserExercise]
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of exercise"
 *            required: true
 *            type: "integer"
 *            format: "int64"
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Exercise'
 */


router.route('/:id')
    .get(userExerciseCtrl.get)
    /** PUT /api/users/:userId - Update user */
    .put(authorize(Role.Admin), userExerciseCtrl.update)
    /** DELETE /api/users/:userId - Delete user */
    .delete(authorize(Role.Admin), userExerciseCtrl.remove);


router.route('/user/:id')
    .get(userExerciseCtrl.getByUser)


router.route('/add-exercise')
    .post(userExerciseCtrl.addUserExercise)



/**
 * @swagger
 * path:
 *  /user-exercise/user/{id}:
 *    get:
 *      summary: Gets a list of all exercises as per user
 *      security:
 *          - BearerAuth: []
 *      tags: [UserExercise]
 *      parameters:
 *        - name: "id"
 *          in: "path"
 *          description: "Id of user"
 *          required: true
 *          type: "integer"
 *          format: "int64"
 *      responses:
 *        "200":
 *          description: Got the user exerises
 *          content:
 *            application/json:
 *              schema:
 *                type: "array"
 *                items:
 *                  $ref: '#/components/schemas/Exercise'
 */



/**
 * @swagger
 * path:
 *  /user-exercise/add-exercise:
 *    post:
 *      summary: Creates Exercise inside user
 *      tags: [UserExercise]
 *      security:
 *          - BearerAuth: [] 
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                  - user_id
 *                  - exercise+id
 *              properties:
 *                  user_id:
 *                      type: integer
 *                  exercise_id:
 *                      type: integer
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Exercise'
 */

module.exports = router;
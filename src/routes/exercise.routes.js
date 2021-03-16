const express = require('express');
const exerciseCtrl = require('../controllers/exercise.controller');
const authorize = require('../helpers/authorize');
const router = express.Router();
const Role = require('../models/role')


router
    .route('/')
    .get(exerciseCtrl.list)
    /** POST /api/exercises Create new exercise */
    .post(authorize(Role.User), exerciseCtrl.create);

/**
 * @swagger
 * path:
 *  /exercise:
 *    get:
 *      summary: Gets a list of all exercises limited by page and pagesize
 *      security:
 *          - BearerAuth: []
 *      tags: [Exercise]
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
 *  /exercise:
 *    post:
 *      summary: Creates Exercise
 *      tags: [Exercise]
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
 *  /exercise/{id}:
 *    get:
 *      summary: Gets a exercise by id
 *      security:
 *          - BearerAuth: []
 *      tags: [Exercise]
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
 *  /exercise/{id}:
 *    put:
 *      summary: Updates the exercise
 *      tags: [Exercise]
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
 *  /exercise/{id}:
 *    delete:
 *      summary: Deletes a exercise by id
 *      security:
 *          - BearerAuth: []
 *      tags: [Exercise]
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
    .get(exerciseCtrl.get)
    /** PUT /api/users/:userId - Update user */
    .put(authorize(Role.Admin), exerciseCtrl.update)
    /** DELETE /api/users/:userId - Delete user */
    .delete(authorize(Role.Admin), exerciseCtrl.remove);





module.exports = router;
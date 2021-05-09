const { Router } = require("express");
const router = Router();

const ClientController = require("../controllers/client.controller");

/**
 * @openapi
 * /api/policies:
 *   get:
 *     description: get all policies
 *     parameters:
 *      - name: limit
 *        type: number
 *        in: params
 *        required: true
 *        default: 20
 *     responses:
 *       200:
 *         description: {}
 *     tags:
 *      - Policies
 *   security:
 *      ApiKeyAuth
 */
router.route("/api/clients").post(ClientController.get);

/**
 * @openapi
 * /api/policies/:id:
 *   get:
 *     description: get policy by id
 *     parameters:
 *      - name: id
 *        type: string
 *        in: params
 *        required: true
 *     responses:
 *       200:
 *         description: {}
 *     tags:
 *      - Policies
 *   security:
 *      ApiKeyAuth
 *
 */
router.route("/api/clients/:id").post(ClientController.getById);

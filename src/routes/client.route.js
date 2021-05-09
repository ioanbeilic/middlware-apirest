const { Router } = require("express");
const router = Router();

const ClientController = require("../controllers/client.controller");

/**
 * @openapi
 * /api/clients:
 *   get:
 *     description: get all clients
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
 *      - Clients
 *   security:
 *      ApiKeyAuth
 */
router.route("/api/clients").post(ClientController.get);

/**
 * @openapi
 * /api/clients/:id:
 *   get:
 *     description: login method
 *     parameters:
 *      - name: id
 *        type: string
 *        in: params
 *        required: true
 *     responses:
 *       200:
 *         description: {}
 *     tags:
 *      - Clients
 *   security:
 *      ApiKeyAuth
 *
 */
router.route("/api/clients/:id").post(ClientController.getById);

/**
 * @openapi
 * /api/clients/:id/policies:
 *   get:
 *     description: get all policies of specific client
 *     parameters:
 *      - name: id
 *        type: string
 *        in: params
 *        required: true"
 *     responses:
 *       200:
 *         description: all policies ass array of polices
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Policy'
 *     tags:
 *      - Clients
 *   security:
 *      - bearerAuth
 */
router
  .route("/api/clients/:id/policies")
  .post(ClientController.getPoliciesByClientId);

module.exports = router;

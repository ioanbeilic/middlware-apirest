const { Router } = require("express");
const router = Router();

const AuthController = require("../controllers/auth.controller");

/**
 * @openapi
 * /api/login:
 *   post:
 *     description: login method
 *     parameters:
 *      - name: body
 *        example: {client_id: string, client_secret: string}
 *        type: string
 *        in: body
 *        required: true
 *     responses:
 *       200:
 *         description: {token: string, type: string}
 */
router.route("/api/login").post(AuthController.login);

module.exports = router;

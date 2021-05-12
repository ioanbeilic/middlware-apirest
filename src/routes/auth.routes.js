import { Router } from "express";
import { login } from "../controllers/auth.controller";

const router = Router();

/**
 * @openapi
 *  /api/login:
 *    post:
 *      tags:
 *        - auth
 *      summary: Retrieve the auth token
 *      operationId: login
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              required:
 *                - username
 *                - password
 *              properties:
 *                username:
 *                  type: string
 *                password:
 *                  type: string
 *      responses:
 *        '200':
 *          description: >-
 *            Return a valid Bearer access token for the valid client_credentials
 *            provided. The token has a time to live equal to expires_in
 *          content:
 *            application/json:
 *              schema:
 *                required:
 *                  - token
 *                  - type
 *                  - expires_in
 *                properties:
 *                  token:
 *                    type: string
 *                  type:
 *                    type: string
 *                  expires_in:
 *                    type: integer
 *        '400':
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *        '401':
 *          description: Unauthorized error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.route("/login").post(login);

export default router;

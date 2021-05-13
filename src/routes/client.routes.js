import { Router } from "express";
const router = Router();

import {
  get,
  getById,
  getPoliciesByClientId,
} from "../controllers/client.controller.js";

/**
 * @openapi
 *  /api/clients:
 *    summary: Get the list of clients details
 *    get:
 *      tags:
 *        - clients
 *      summary: >-
 *        Get the list of clients details paginated and limited to 10 elements by
 *        default. This API endpoint access also an optional filter query to
 *        filter by client name.
 *      description: >-
 *        Can be accessed by client with role user (it will retrieve its own
 *        client details as only element of the list) and admin (it will retrieve
 *        all the clients list)
 *      operationId: findClients
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: query
 *          name: limit
 *          schema:
 *            properties:
 *              limit:
 *                type: integer
 *        - in: query
 *          name: name
 *          schema:
 *            properties:
 *              limit:
 *                type: string
 *      responses:
 *        '200':
 *          description: List of clients details
 *          content:
 *            application/json:
 *              schema:
 *                items:
 *                  properties:
 *                    id:
 *                      type: string
 *                    name:
 *                      type: string
 *                    email:
 *                      type: string
 *                    role:
 *                      type: string
 *                    policies:
 *                      items:
 *                        properties:
 *                          id:
 *                            type: string
 *                          amountInsured:
 *                            type: string
 *                          inceptionDate:
 *                            type: string
 *        '401':
 *          description: Unauthorized error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */

router.route("/").get(get);

/**
 * @openapi
 *  '/api/clients/{id}':
 *    summary: Get the client's details
 *    get:
 *      tags:
 *        - clients
 *      summary: Get the client's details
 *      description: >-
 *        Can be accessed by client with role user (it will retrieve its own
 *        client details) and admin (it will retrieve any client details)
 *      operationId: findByIdClients
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - in: path
 *        name: id
 *        schema:
 *            properties:
 *              id:
 *                type: string
 *      responses:
 *        '200':
 *          description: Client's details
 *          content:
 *            application/json:
 *              schema:
 *                items:
 *                  properties:
 *                    id:
 *                      type: string
 *                    name:
 *                      type: string
 *                    email:
 *                      type: string
 *                    role:
 *                      type: string
 *                    policies:
 *                      items:
 *                        properties:
 *                          id:
 *                            type: string
 *                          amountInsured:
 *                            type: string
 *                          inceptionDate:
 *                            type: string
 *        '401':
 *          description: Unauthorized error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *        '403':
 *          description: Forbidden error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *        '404':
 *          description: Not Found error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.route("/:id").get(getById);

/**
 * @openapi
 * '/api/clients/{id}/policies':
 *    summary: Get the client's policies
 *    get:
 *     tags:
 *       - clients
 *     summary: Get the client's policies
 *     description: >-
 *       Can be accessed by client with role user (it will retrieve its own
 *       client policy list) and admin (it will retrieve any client policy list)
 *     operationId: findPoliciesByClientId
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *           properties:
 *             id:
 *               type: string
 *     responses:
 *       '200':
 *         description: Client's policies
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 properties:
 *                   id:
 *                     type: string
 *                   amountInsured:
 *                     type: string
 *                   email:
 *                     type: string
 *                   inceptionDate:
 *                     type: string
 *                   installmentPayment:
 *                     type: boolean
 *       '401':
 *         description: Unauthorized error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '403':
 *         description: Forbidden error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '404':
 *         description: Not Found error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'

 */
router.route("/:id/policies").get(getPoliciesByClientId);

export default router;

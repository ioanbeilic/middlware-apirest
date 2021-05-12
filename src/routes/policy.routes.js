import { Router } from "express";
const router = Router();

import { get, getById } from "../controllers/policy.controller";

/**
 * @openapi
 * '/api/policies':
 *    summary: Get the list of policies' client
 *    get:
 *      tags:
 *        - policies
 *      summary: >-
 *        Get the list of policies' client paginated and limited to 10 elements by default.
 *      description: >-
 *        Can be accessed by client with role user (it will retrieve its own
 *        policies) and admin (it will retrieve all the policies)
 *      operationId: findPolicies
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: query
 *          name: limit
 *          schema:
 *            properties:
 *              limit:
 *                type: integer
 *      responses:
 *        '200':
 *          description: List of policies' client
 *          content:
 *            application/json:
 *              schema:
 *                items:
 *                  properties:
 *                    id:
 *                      type: string
 *                    amountInsured:
 *                      type: string
 *                    email:
 *                      type: string
 *                    inceptionDate:
 *                      type: string
 *                    installmentPayment:
 *                      type: boolean
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
 * '/api/policies/{id}':
 *    summary: Get the details of a policy's client
 *    get:
 *      tags:
 *        - policies
 *      summary: Get the details of a policy's client
 *      description: >-
 *        Can be accessed by client with role user (it will retrieve its own
 *        policy) and admin (it will retrieve all the policies)
 *      operationId: findByIdPolicies
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
 *          description: Get the details of a policy's client
 *          content:
 *            application/json:
 *              schema:
 *                id:
 *                  type: string
 *                amountInsured:
 *                  type: string
 *                email:
 *                  type: string
 *                inceptionDate:
 *                  type: string
 *                installmentPayment:
 *                  type: boolean
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

export default router;

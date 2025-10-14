"use strict";
/**
 * @swagger
 * /api/v1/webhooks:
 *   post:
 *     summary: webhook to send message to admin
 *     tags: [WEBHOOK]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 description: Administrator's phone number
 *               message:
 *                 type: string
 *                 description: Message content
 *             required:
 *               - phone
 *               - message
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */

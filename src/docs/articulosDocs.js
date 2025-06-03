/**
 * @swagger
 * tags:
 *   name: Artículos
 *   description: Operaciones de gestión de artículos (CRUD). Requiere autenticación JWT.
 */

/**
 * @swagger
 * /articulo/nombre/{nombre}:
 *   get:
 *     summary: Obtiene artículos por nombre (búsqueda parcial).
 *     tags: [Artículos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Parte del nombre del artículo a buscar.
 *         example: "Laptop"
 *     responses:
 *       200:
 *         description: Lista de artículos encontrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Articulo'
 *       401:
 *         description: No autorizado (token JWT inválido o ausente).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /articulo/estado/{estado}:
 *   get:
 *     summary: Obtiene artículos por estado.
 *     tags: [Artículos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [activo, inactivo]
 *         required: true
 *         description: El estado de los artículos a buscar ('activo' o 'inactivo').
 *         example: "activo"
 *     responses:
 *       200:
 *         description: Lista de artículos con el estado especificado.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Articulo'
 *       401:
 *         description: No autorizado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /articulo/{id}:
 *   get:
 *     summary: Obtiene un artículo por su ID.
 *     tags: [Artículos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del artículo a buscar.
 *         example: 1
 *     responses:
 *       200:
 *         description: Información del artículo.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Articulo'
 *       404:
 *         description: Artículo no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: No autorizado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /articulo:
 *   post:
 *     summary: Crea un nuevo artículo.
 *     tags: [Artículos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - marca
 *               - fecha_activacion
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Teclado Mecánico"
 *               marca:
 *                 type: string
 *                 example: "GamingPro"
 *               fecha_activacion:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-06-03T14:30:00Z"
 *     responses:
 *       201:
 *         description: Artículo creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Articulo'
 *       400:
 *         description: Datos de entrada inválidos (ej. por `validarArticulo` middleware).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: No autorizado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /articulo/{id}:
 *   put:
 *     summary: Actualiza un artículo existente.
 *     tags: [Artículos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del artículo a actualizar.
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Monitor Curvo Ultrawide"
 *               marca:
 *                 type: string
 *                 example: "VisualTech"
 *               fecha_activacion:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-06-03T14:30:00Z"
 *               estado:
 *                 type: string
 *                 enum: [activo, inactivo]
 *                 example: "activo"
 *     responses:
 *       200:
 *         description: Artículo actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Articulo'
 *       400:
 *         description: Datos de entrada inválidos.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: No autorizado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Artículo no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /articulo/{id}:
 *   delete:
 *     summary: Desactiva un artículo (cambia su estado a 'inactivo').
 *     tags: [Artículos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del artículo a desactivar.
 *         example: 1
 *     responses:
 *       200:
 *         description: Artículo desactivado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Artículo desactivado"
 *       401:
 *         description: No autorizado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Artículo no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestión de Artículos',
      version: '1.0.0',
      description: 'Una API CRUD para gestionar artículos, con autenticación JWT.',
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Servidor de Desarrollo',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Introduce tu token JWT aquí para acceder a las rutas protegidas. Ejemplo: `Bearer TU_TOKEN`',
        },
      },
      schemas: {
        Articulo: {
          type: 'object',
          required: ['nombre', 'marca', 'fecha_activacion'],
          properties: {
            id: {
              type: 'integer',
              description: 'El ID auto-generado del artículo.',
              readOnly: true,
            },
            nombre: {
              type: 'string',
              description: 'El nombre del artículo.',
              example: 'Laptop XYZ',
            },
            marca: {
              type: 'string',
              description: 'La marca del artículo.',
              example: 'Marca Tech',
            },
            fecha_activacion: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha y hora de activación del artículo (ISO 8601).',
              example: '2023-10-26T10:00:00Z',
            },
            estado: {
              type: 'string',
              enum: ['activo', 'inactivo'],
              description: 'El estado del artículo (activo por defecto).',
              example: 'activo',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha y hora de creación del registro.',
              readOnly: true,
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha y hora de la última actualización del registro.',
              readOnly: true,
            },
          },
        },
        TokenRequest: {
          type: 'object',
          required: ['id', 'email'],
          properties: {
            id: {
              type: 'integer',
              description: 'El ID del usuario para generar el token.',
              example: 1,
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'El email del usuario para generar el token.',
              example: 'user@example.com',
            },
          },
        },
        TokenResponse: {
          type: 'object',
          properties: {
            token: {
              type: 'string',
              description: 'El token JWT generado.',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Mensaje de error.',
              example: 'Error al buscar por nombre',
            },
            message: {
              type: 'string',
              description: 'Mensaje de error.',
              example: 'Artículo no encontrado',
            },
          },
        },
      },
    },
  },
  apis: [
    './src/docs/*.js', 
  ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
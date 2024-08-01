import express from 'express';
import { celebrate, Joi, errors } from 'celebrate';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import productController from '../controllers/productController.js';

const router = express.Router();

// Esquema de validación con Joi
const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  height: Joi.number().positive().required(),
  length: Joi.number().positive().required(),
  width: Joi.number().positive().required(),
});

// CRUD de productos
router.get('/', authMiddleware, productController.getProducts);

router.get('/:id', authMiddleware, productController.getProduct);

router.post('/', authMiddleware, celebrate({ body: productSchema }), productController.createProduct);

router.put('/:id', authMiddleware, celebrate({ body: productSchema }), productController.updateProduct);

router.delete('/:id', authMiddleware, productController.deleteProduct);

// Middleware de manejo de errores de celebrate
router.use(errors());

export default router;

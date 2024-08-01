
import express from 'express';
import { errors } from 'celebrate';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import { CONFIG } from './config.js';
import rateLimit from 'express-rate-limit';
import { conexion } from './utils/conexion.js';


const app = express();

// Configuración de límite de velocidad
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limitar a 100 peticiones por IP
});
// Conexión a MongoDB
await conexion()
// Aplicar el límite de velocidad
app.use(limiter);

// Middleware para analizar JSON
app.use(express.json());

// Configuración del servidor
const PORT = CONFIG.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Rutas
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

// Manejo de errores
app.use(errors());

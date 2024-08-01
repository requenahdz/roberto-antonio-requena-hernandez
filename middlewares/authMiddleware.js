import jwt from 'jsonwebtoken';
import AccessToken from '../models/AccessToken.js';
import { CONFIG } from '../config.js';

// Middleware de autenticación
export const authMiddleware = async (req, res, next) => {
  try {
    // Obtener el token de la cabecera Authorization
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).send('Token no proporcionado');
    }

    // Verificar el token
    const decoded = jwt.verify(token, CONFIG.JWT_SECRET);
    
    // Buscar el token en la base de datos
    const accessToken = await AccessToken.findOne({ token });
    if (!accessToken) {
      return res.status(401).send('Token inválido o expirado');
    }

    // Añadir el ID del usuario a la solicitud
    req.userId = decoded.userId;
    next(); // Continuar al siguiente middleware o ruta
  } catch (error) {
    // Manejo de errores de verificación del token
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).send('Token inválido');
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).send('Token expirado');
    }
    res.status(500).send('Error en la autenticación');
  }
};

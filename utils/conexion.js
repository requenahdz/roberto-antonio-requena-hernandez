import mongoose from 'mongoose';
import { CONFIG } from '../config.js';

export const conexion = async () => {
    try {
      await mongoose.connect(CONFIG.MONGODB_URI);
      console.log('Conectado a MongoDB');
    } catch (error) {
      console.error('Error al conectar a MongoDB', error);
      process.exit(1);
    }
  };
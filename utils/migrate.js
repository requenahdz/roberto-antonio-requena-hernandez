
import User from '../models/User.js';
import Product from '../models/Product.js';
import AccessToken from '../models/AccessToken.js';  // Asegúrate de importar este modelo también
import { conexion } from './conexion.js'
import mongoose from 'mongoose';
import { CONFIG } from '../config.js';

const collections = async () => {
  try {
    await User.createCollection();
    await Product.createCollection();
    await AccessToken.createCollection();

    const defaultUser = {
      name: CONFIG.USER_DEFAULT_NAME,
      password: CONFIG.USER_DEFAULT_PASSWORD,
      phone: CONFIG.USER_DEFAULT_PHONE,
      img_profile: CONFIG.USER_DEFAULT_IMG,
    };

    const userExists = await User.findOne({ phone: defaultUser.phone });

    if (!userExists) {
      await User.create(defaultUser);
      console.log('Usuario por defecto creado');
    } else {
      console.log('Usuario por defecto ya existe');
    }
    console.log('Colecciones creadas');
  } catch (error) {
    console.error('Error al crear colecciones', error);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
};
const migrate = async () => {
  await conexion();
  await collections();
};

migrate();




// controllers/authController.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import AccessToken from '../models/AccessToken.js';
import { CONFIG } from '../config.js';

const authController = {
  // Inicio de sesión
  login: async (req, res) => {
    const { phone, password } = req.body;
    try {
      // Buscar el usuario por teléfono
      const user = await User.findOne({ phone });
      if (!user) {
        return res.status(404).send('Usuario no encontrado');
      }

      // Verificar la contraseña
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send('Contraseña incorrecta');
      }

      // Crear el token JWT
      const token = jwt.sign({ userId: user._id }, CONFIG.JWT_SECRET, { expiresIn: '1h' });

      // Guardar el token en la base de datos
      await AccessToken.create({ user_id: user._id, token });

      // Enviar el token como respuesta
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      res.status(500).send('Error en el servidor');
    }
  },
};

export default authController;

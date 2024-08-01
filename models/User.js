import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatorio'],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'El número de teléfono es obligatorio'],
    unique: true,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v); // Ejemplo de validador para 10 dígitos
      },
      message: props => `${props.value} no es un número de teléfono válido!`
    },
  },
  img_profile: {
    type: String,
    default: 'default-profile.png',
  },
}, {
  timestamps: true,
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = model('User', userSchema);

export default User;

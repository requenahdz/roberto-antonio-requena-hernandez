import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const accessTokenSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Referencia al modelo User, si aplicable
  },
  token: {
    type: String,
    required: true,
    unique: true, // Garantiza que cada token sea único
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '1h', // Expira automáticamente después de 1 hora
  },
}, {
  timestamps: true, // Añade createdAt y updatedAt automáticamente
});

const AccessToken = model('AccessToken', accessTokenSchema);

export default AccessToken;

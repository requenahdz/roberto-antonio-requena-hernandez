import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    USER_DEFAULT_NAME: process.env.USER_DEFAULT_NAME,
    USER_DEFAULT_PASSWORD: process.env.USER_DEFAULT_PASSWORD,
    USER_DEFAULT_PHONE: process.env.USER_DEFAULT_PHONE,
    USER_DEFAULT_IMG: process.env.USER_DEFAULT_IMG
};

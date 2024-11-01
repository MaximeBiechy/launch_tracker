import dotenv from 'dotenv';

dotenv.config();

export const APP_CONFIG = {
    port: process.env.PORT || 3000,
}
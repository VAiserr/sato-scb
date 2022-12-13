import dotenv from "dotenv";
import App from "./App.js";

// dotenv configure
dotenv.config();

/**
 * enviroments variables
 * 
 * Для работы необходимо создать .env файл с нужными переменными
 */
const PORT: number = Number(process.env.PORT) || 5000;  // PORT
const DB_USER: string = process.env.DB_USER || '';      // DB_USER
const DB_PASSWORD: string = process.env.DB_PASS || '';  // DB_PASS
const DB_NAME: string = process.env.DB_NAME || 'test';  // DB_NAME

// Экземпляр класса App
const app: App = new App(
    PORT,
    {
        user: DB_USER,
        password: DB_PASSWORD,
        name: DB_NAME
    }
);

// Старт приложения
app.start();
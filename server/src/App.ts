import cors from "cors";
import express from "express";
import mongoose from "mongoose";

// тип с данными для подключения к DB
type TDB = {
    user: string,
    password: string;
    name: string,
}

/**
 * Главный класс приложения.
 * 
 * Обеспечивает поднятие сервера и подключения к базе данных
 */
export default class App {
    private app: express.Application;
    private port: number;
    private db: TDB;

    /**
     * Конструктор класса
     * @param port порт сервера
     * @param db данные для подключения базы данных
     */
    constructor(port: number, db: TDB) {
        this.app = express();
        this.port = port;
        this.db = db;

        this.initializeMiddlewares();
    }

    // добавление промежуточной обработки к запросам
    private initializeMiddlewares(): void {                               
        this.app.use(cors());
        this.app.use(express.json());
    }

    // подключение к базе данных
    private async connectDB(user: string, password: string, name: string): Promise<void> {
        await mongoose.connect(
            `mongodb+srv://${user}:${password}@cluster0.calnqrn.mongodb.net/${name}`
        );
    }

    // запуск сервера и отслеживание запросов
    private listen(): void {
        this.app.listen(this.port, () => console.log(`server started on port ${this.port}`));
    }

    /**
     * Запуск приложения
     */
    public async start(): Promise<void> {
        try {
            await this.connectDB(this.db.user, this.db.password, this.db.name);
            console.log("DB connected");
    
            this.listen();
        } catch (error) {
            console.log(error);
        }
    }
}
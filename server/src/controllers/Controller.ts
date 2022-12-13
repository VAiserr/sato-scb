import express from "express";

/**
 * Abstract class Controller
 * 
 * Абстрактный класс от которого наследуются все контролеры
 */
 export default class Controller {
    public router: express.IRouter = express.Router();
    public path: string;
    
    /**
     * Конструктор
     * @param path путь для запросов к контролеру
     */
    constructor(path?: string) {
        this.path = path?.replaceAll('/', '') || '';
        this.initializeRoutes();
    }

    initializeRoutes(): void {}
}
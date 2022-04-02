import express, { Application } from "express";


export class App {
    private app: Application;

    constructor(private port? : number | string) {
        this.app = express();
        this.middlewares();
    }

    settings() {
        this.app.set("port", process.env.PORT || 3000)
    }

    middlewares() {

    }

    async listen() {
        this.app.listen(this.port);
        console.log("Listening on port:",this.port);
        
    }
}
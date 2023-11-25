import { Express, json } from "express";
import morgan from "morgan";

class ServerDependency {

    static InyectDependency(app: Express) {
        app.use(json());
        app.use(morgan("dev"));
    }
}

export default ServerDependency
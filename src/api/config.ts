import { DataSource, DataSourceOptions } from "typeorm";
import Biography from "../domain/entities/Biography";
import Rights from "../domain/entities/Rights";
import Author from "../domain/entities/Author";
import Title from "../domain/entities/Title";
import Photografy from "../domain/entities/Photography";

// Biography, Rights, Title, Photografyc
const entities = [Author, Title];
const db_mysql: DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mysql",
    database: "proyecto_final_prog_web",
    entities: entities
}

const config = {
    connectionStrings: {
        db_mysql
    }
}

export default config;

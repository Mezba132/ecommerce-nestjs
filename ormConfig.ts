import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import entities from "src/entity";

const config : TypeOrmModuleOptions = {
    type : 'mysql',
    host : 'localhost',
    port : 3306,
    username : 'root',
    password : 'admin132',
    database : 'ecommerce',
    entities,
    synchronize : true,
}

export default config;
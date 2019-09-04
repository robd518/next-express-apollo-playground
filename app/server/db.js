import 'reflect-metadata'
import { Employee } from '../entities/employee'

const dbconfig = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [
        Employee
    ],
    synchronize: true,
    logging: false
}

export default dbconfig
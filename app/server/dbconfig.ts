import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import { Employees } from '../entity/employee.entity'

const dbconfig: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [
        Employees
    ],
    synchronize: true,
    logging: false
}

export default dbconfig
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import { Employee } from '../entity/employee'

const DB_TYPE = 'sqlite'

const sqliteOptions: SqliteConnectionOptions = {
    type: 'sqlite',
    database: './database.sqlite',
    synchronize: true,
    logging: false,
    entities: [Employee],
  }

  const mysqlOptions: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [
        Employee
    ],
    synchronize: true,
    logging: false
}

export default DB_TYPE === 'sqlite' ? sqliteOptions : mysqlOptions
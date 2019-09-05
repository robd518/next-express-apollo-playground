import { getRepository } from 'typeorm'
import { Employee } from '../entity/employee'

const getEmployees = () => {
    console.log(getRepository(Employee).find())

    return (
        <div>Employees page</div>
    )
}

export default getEmployees
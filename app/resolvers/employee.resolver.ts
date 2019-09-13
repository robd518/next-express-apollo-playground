import { getRepository } from 'typeorm'
import { Employee } from '../entity/employee.entity'


export default {
    Query: {
        employees: async (_parent: any, _variables: any) => {
            const employeeRepo = getRepository(Employee)
            const [users, count] = await employeeRepo.findAndCount()
            return { users, count }
        }
    }
}
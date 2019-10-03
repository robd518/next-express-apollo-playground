import { getRepository } from 'typeorm'
import { Employees, IEmployees } from '../entity/employee.entity'


export default {
    Query: {
        employees: async (_parent: any, _variables: any) => {
            const employeeRepo = getRepository(Employees)
            const users = await employeeRepo.find()
            return users
        }
    },
    Mutation: {
        addEmployee: async (_parent: any, { first_name, last_name }: IEmployees) => {
            try {
                const employeeRepo = getRepository(Employees)

                let employee = new Employees()
                employee.first_name = first_name
                employee.last_name = last_name

                await employeeRepo.save(employee)
                console.log('Employee has been saved')

            } catch (err) {
                console.log(err)
            }
        }
    }
}
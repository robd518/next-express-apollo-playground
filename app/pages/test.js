// import { createConnection } from 'typeorm'
// import { dbconfig } from '../config/db'
// import { Employee } from '../models/employee'

const testPage = () => {
    // createConnection(dbconfig).then(connection => {
    //     let employee = new Employee()
    //     employee.first_name = "Rob"
    //     employee.last_name = "D'Aveta"

    //     return connection.manager
    //         .save(employee)
    //         .then(employee => {
    //             console.log('employee saved with id ', employee.id)
    //         })
    // }).catch(error => console.log(error))
    
    return (
        <div> hi there</div>
    )
}

export default testPage
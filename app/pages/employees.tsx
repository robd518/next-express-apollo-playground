import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Form, StyledInput, SubmitButton } from '../components/FormElements'
import { EmployeeList, EmployeeCard } from '../components/EmployeeList'
import { IEmployees } from '../entity/employee.entity'

const GET_EMPLOYEE = gql`
    {
        employees {
            emp_no
            first_name
            last_name
        }   
    }
`

const ADD_EMPLOYEE = gql`
    mutation AddEmployee($firstName: String!, $lastName: String!) {
        addEmployee(first_name: $firstName, last_name: $lastName) {
            first_name
            last_name
        }
    }
`

const employeesPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [addEmployee] = useMutation(ADD_EMPLOYEE)
    const { loading, error, data } = useQuery(GET_EMPLOYEE)

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleFirstNameChange function')
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleLastNameChange function')
        setLastName(e.target.value)
    }

    const handleSubmit = () => {
        console.log('handleSubmit inside employees page')
        console.log(firstName)
        console.log(lastName)
        addEmployee({
            variables: {
                firstName,
                lastName
            }
        }).then(() => {
            setFirstName('')
            setLastName('')
        })
    }

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <>
            <EmployeeList>
                {data.employees.map((emp: IEmployees) => (
                    <EmployeeCard
                        key={emp.emp_no}
                        firstName={emp.first_name}
                        lastName={emp.last_name}
                        empNo={emp.emp_no}
                    />
                ))}
            </EmployeeList>
            <Form onSubmit={handleSubmit}>
                <StyledInput
                    name='firstName'
                    placeholder='First Name'
                    onChange={handleFirstNameChange}
                    value={firstName}
                    type="text"
                />
                <StyledInput
                    name='lastName'
                    placeholder='Last Name'
                    onChange={handleLastNameChange}
                    value={lastName}
                    type="text"
                />
                <SubmitButton text={'Add'} />
            </Form>
        </>

    )
}

export default employeesPage
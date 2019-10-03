import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Form, StyledInput, SubmitButton } from '../components/FormElements'

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

    return (
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
    )
}

export default employeesPage
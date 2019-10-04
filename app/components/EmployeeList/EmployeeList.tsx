import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div``

const EmployeeList = (props: any) => {
    console.log(props)
    return (
        <Container>
            Current Employees
            {props.children}
        </Container>
    )
}

export default EmployeeList
import React from 'react'
import styled from '@emotion/styled'

const Card = styled.div`

`

interface IEmployeeCardProps {
    empNo: number
    firstName: string
    lastName: string
}

const EmployeeCard = ({ empNo, firstName, lastName }: IEmployeeCardProps) => {
    console.log(lastName)
    return (
        <Card>
            {`${empNo}, ${lastName}, ${firstName}`}
        </Card>
    )
}

export default EmployeeCard
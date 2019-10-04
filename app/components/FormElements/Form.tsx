import React from 'react'
import styled from '@emotion/styled'

interface IFormData {
    name: string
    value: string | number | boolean | null | undefined
}

interface IFormProps {
    children: any
    onSubmit: (data: IFormData[]) => void
}

const Container = styled.div``

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%
`

const Form = ({ children, onSubmit }: IFormProps) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(children)
    }

    return (
        <Container>
            <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>
        </Container>
    )
}

export default Form
import React, { useState } from 'react'
import styled from '@emotion/styled'

interface InputProps {
    name: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
}

export const StyledInput = styled.input`
    width: 200px;
`

const Input = ({ name, placeholder, type }: InputProps) => {

    const [text, setText] = useState('')

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleOnChange inside <Input>')
        console.log('e.target.value =', e.target.value)
        setText(e.target.value)
        console.log('text = ', text)
    }

    return (
        <StyledInput
            placeholder={placeholder}
            name={name}
            onChange={handleOnChange}
            value={text}
            type={type}
        />
    )
}

export default Input
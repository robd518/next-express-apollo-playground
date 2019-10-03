import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
    width: 64px;
`

const SubmitButton = (props: any) => {
    return (
        <Button type='submit'>{props.text}</Button>
    )
}

export default SubmitButton
import React from 'react'
import { Button } from 'react-bootstrap'

export const Link = ({message, onClickLink}) => {
    return (
        <>

        <Button variant="link" type={'button'} onClick={onClickLink}>{message}</Button>
        </>

    )
}

import React from 'react'

export const Link = ({message, link, onClickLink}) => {
    return (
        <a href={link} onClick={onClickLink}>
{message}
        </a>
    )
}

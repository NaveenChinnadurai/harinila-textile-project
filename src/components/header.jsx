import React from 'react'

function Header(props) {
    return (
        <h2 className={`lead title-primary-6 fw-bold text-center opacity-50 ${props.textSize}`}>{props.text}</h2>

    )
}

export default Header
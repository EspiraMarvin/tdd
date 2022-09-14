import React from 'react'
import "./Header.css"

export default function Header({ title }) {
    return (
        <>
            <h1 title="Header" className="header">{title}</h1>
            {/* <h3 title="header" className="header">Cats</h3> */}
            {/* <h3 data-testid="header-1" className="header">Cats</h3> */}

        </>
    )
}

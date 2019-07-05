import * as React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <h1 className='headerText'>How Old? 🤔</h1>
            <br/>
            <p>This webpage tells you how old a person based on a image.
                Drag and drop or select an image in the space below.
            </p>
        </div>
    )
}
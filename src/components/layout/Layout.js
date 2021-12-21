import React from 'react'
import Navbar from '../navbar/Navbar'
import './Layout.scss'

function Layout({children, bgImage, color}) {
    return (
        <div className="layout" style={{backgroundColor: `${color}`}}>
            {
                /* if there is bgImage then show */
                bgImage && 
                <img src={bgImage}  alt="space and planets"/>
            }
            <header>
                <Navbar />
            </header>
            <main className="children">{children}</main>
        </div>
    )
}

export default Layout

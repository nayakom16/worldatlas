import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "../../App.css"


const Header = () => {
    return (
        <header>
            <div className='container'>
            <div className="grid navbar-grid">
                <div className="logo">
                    <NavLink to='/'>
                        <h1>WorldAtlas</h1>
                    </NavLink>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/" className='link'>Home</Link></li>
                        <li><Link to="/country" className='link'>Country</Link></li>
                        <li><Link to="/contact" className='link'>Contact</Link></li>
                        <li><Link to="/about" className='link'>About</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        </header>
    )
}

export default Header

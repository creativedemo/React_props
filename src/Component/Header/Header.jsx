import React from 'react'
import { Link } from 'react-router-dom'
import About from "../About"
const Header = () => {

    // ========
    function prup() {
        alert("welcome")
    }

    return (
        <>
            <div className='header-wrapper'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>

            {/* ========= */}
            <About data={prup}/>
        </>
    )
}

export default Header       
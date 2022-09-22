import React from 'react'
// import { Link } from 'react-router-dom';
// import NavMenu from './NavMenu';

const Header = () => {
    return (
        <header className='Header'>
            <div className='inner'>
                <h1>
                    <Link to="/">
                        <img alt=""/>
                    </Link>
                </h1>
            </div>
        </header>
    )
}

export default Header
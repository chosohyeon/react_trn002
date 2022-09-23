import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NAVLINK = [
    { content: "SHOP", link: "/" },
    { content: "STORY", link: "/" },
    { content: "STORE", link: "/" },
    { content: "SMEMBERSHIP", link: "/" },
]

const NavMenu = () => {
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }

        </ul>
    )
}

export default NavMenu;
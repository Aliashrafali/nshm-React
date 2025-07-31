import React from "react";
import { NavLink } from "react-router-dom"; // need import

const Navbar = () =>{
    return(
        <>
            <div className="navbar">
                <nav>
                    <ul>
                        <li><NavLink to={'/'} className={'nav'}>Home</NavLink></li>
                        <li><NavLink to={'/About'} className={'nav'}>About Us</NavLink></li>
                        <li><NavLink to={''} className={'nav'}>Gallary</NavLink></li>
                        <li><NavLink to={''} className={'nav'}>Admission</NavLink></li>
                        <li><NavLink to={''} className={'nav'}>Rules and Regulations</NavLink></li>
                        <li><NavLink to={''} className={'nav'}>Contact Us</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar

import React from 'react';
import { useState } from 'react';

function Navbar() {
    const [menuActive, setMenuActive] = useState(false);
	

    const openMobileMenu = () => {
        setMenuActive(prevState => !prevState)
    }

	return (
		<div className="navBar">
			<div className="container">
				<div className="logo">UTBO</div>
				<ul className={`navLinks ${menuActive ? 'active' : ''}`} onClick={(e) => {
					const clickedElement = e.target.className
					if(clickedElement.includes('navLinks')) {
						setMenuActive(false)
					} if(clickedElement.includes('navLink')) {
						// Close menu
						// Scroll to page
					}
				}}>
					<li className='navLink'>Home</li>
					<li className='navLink'>About</li>
					<li className='navLink'>Events</li>
					<li className='navLink'>Gallery</li>
					<li className='email'>unittobackoutdoors@gmail.com</li>
				</ul>
				<div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={openMobileMenu}>
					<div className="topLine"></div>
					<div className="middleLine"></div>
					<div className="bottomLine"></div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

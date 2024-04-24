import React from 'react';
import './Header.css';


function Header() {
	return (
		<header className="header">
			<nav>
				<button href="/">Home</button>
				<button href="map">Map</button>
			</nav>
		</header>
	);
}

export default Header;

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3><Link className="h3" to="/">MNML</Link></h3>
			<nav ref={navRef}>
        <Link to="/">Essentials</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/about">About</Link>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Nav;
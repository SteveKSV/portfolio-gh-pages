import React, { useState } from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    // For active link styling
    const getLinkClassName = ({ isActive }) => {
        return isActive ? "header-nav-link active" : "header-nav-link";
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <NavLink to="/" className="header-logo">
                    SteveKSV
                </NavLink>
                
                {/* Hamburger Button */}
                <button 
                    onClick={toggleMenu} 
                    className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Single Navigation that changes based on screen size */}
                <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="header-nav-list">
                        <li className="header-nav-item">
                            <NavLink to="/" className={getLinkClassName} onClick={handleLinkClick}>
                                Home
                            </NavLink>
                        </li>
                        <li className="header-nav-item">
                            <NavLink to="/projects" className={getLinkClassName} onClick={handleLinkClick}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="header-nav-item">
                            <NavLink to="/skills" className={getLinkClassName} onClick={handleLinkClick}>
                                Core Skills
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
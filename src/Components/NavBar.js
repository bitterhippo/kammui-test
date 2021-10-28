import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const navDefaults = [
    {name: "Home", link: "/"}, 
    {name: "About", link: "/about"}, 
    {name: "Registration", link: "/registration"}];
  const [hoveredNavItem, setHoveredNavItem] = useState('');

  return (
    <div style={styles.navWrapper}>
      {/* Logo */}
      <div style={styles.logoText}>Logo</div>
      {/* In-line nav bar */}
      <div style={styles.navList}>
        {
          navDefaults.map(currentItem => <div
            onMouseEnter={() => setHoveredNavItem(currentItem.name)}
            onMouseLeave={() => setHoveredNavItem("")}
            style={hoveredNavItem === currentItem.name ? styles.selectedNavItem : styles.unselectedNavItem}
            key={currentItem.name}
          >
              <Link to={currentItem.link}>{currentItem.name}</Link>
            </div>)
        }
      </div>
    </div>
  )
};

const styles = {
  navWrapper: {
    display: 'flex',
    width: '80%',
    margin: '20px auto 0 auto',
    flexDirection: 'inline-row',
    justifyContent: 'space-between',
  },
  navList: {
    display: 'flex',
    flexDirection: 'inline-row',
    gap: '20px',
    fontSize: '28px'
  },
  selectedNavItem: {
    textDecoration: 'underline',
  },
  logoText: {
    fontSize: '28px',
    fontWeight: 'bold',
  },
  unselectedNavItem: {
    textDecoration: 'none',
  }
};

export default NavBar;

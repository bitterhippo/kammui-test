import React, { useState } from 'react';

const NavBar = () => {

  const navDefaults = ["Home", "About", "Portfolio", "Contact"];
  const [hoveredNavItem, setHoveredNavItem] = useState('');

  return (
    <div style={styles.navWrapper}>
      {/* Logo */}
      <div>Logo</div>
      {/* In-line nav bar */}
      <div style={styles.navList}>
        {
          navDefaults.map(currentItem => <div
            onMouseEnter={() => setHoveredNavItem(currentItem)}
            onMouseLeave={() => setHoveredNavItem("")}
            style={hoveredNavItem === currentItem ? styles.selectedNavItem : null}
            key={currentItem}
          >
              {currentItem}
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
  }
};

export default NavBar;

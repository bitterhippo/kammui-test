import React from 'react';

const NavBar = () => {

  const navDefaults = ["Home", "About", "Portfolio", "Contact"];

  return (
    <div style={styles.navWrapper}>
      {/* Logo */}
      <div>Logo</div>
      {/* In-line nav bar */}
      <div style={styles.navList}>
        {
          navDefaults.map(currentItem => <div>
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
    gap: '10px',
    fontSize: '28px'
  }
};

export default NavBar;

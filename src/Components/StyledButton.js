import React from 'react';

const StyledButton = ({ text, top }) => {
  return (
    <div style={styles.buttonWrapper}>
      <button style={styles.button}>{text}</button>
    </div>
  )
};

const styles = {
  button: {
    height: '32px',
    width: '120px',
    backgroundColor: '#d387ab',
    color: 'white',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
    borderRadius: '5px'
  }
};

export default StyledButton;
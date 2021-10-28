import React from 'react';

const StyledButton = ({ text, top }) => {
  return (
    <button style={styles.button}>{text}</button>
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
    fontSize: '18px'
  }
};

export default StyledButton;
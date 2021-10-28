import React from 'react';

const Registration = () => {
  return (
    <div style={styles.formWrapper}> 
      <label> LOL </label>
      <input type="text" placeholder="lol"></input>
    </div>
  )
};

const styles = {
  formWrapper: {
    marginTop: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%',
    backgroundColor: 'white',
    borderTop: '4px solid #d387ab',
    borderBottom: '4px solid #d387ab'
  }
};

export default Registration;
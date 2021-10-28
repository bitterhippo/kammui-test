import React from 'react';

//Subcomponents
import StyledButton from '../Components/StyledButton';

const Registration = () => {
  return (
    <div style={styles.formWrapper}>
      <div style={styles.form}>
        <div>
          <input 
          style={styles.input}
          placeholder="name"></input>
        </div>
        <div>
          <input 
          style={styles.input}
          placeholder="last name"></input>
        </div>
        <div>
          <input
          style={styles.input}
          placeholder="email address"></input>
        </div>
        <StyledButton 
        text="Sign Up" 
        />
      </div>
    </div>
  )
};

const styles = {
  formWrapper: {
    margin: "15% auto 0 auto",
    backgroundColor: "#000080",
    width: '40%',
    maxWidth: '390px',
    borderRaidus: '15'
  },
  form: {
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingBottom: '20px',
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    margin: "0 auto 0 auto",
  },
  input: {
    height: '32px',
    fontSize: '26px',
    outline: 'none',
  }
};

export default Registration;
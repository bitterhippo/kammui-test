import React from 'react';

const Home = () => {
  return (
    <div style={styles.contentWrapper}>
      <span style={styles.bigText}>Kammui</span>
      <br />
      <span style={styles.smallText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Ipsum.</span>
    </div>
  )
};

const styles = {
  contentWrapper: {
    marginTop: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    textAlign: 'center'
  },
  bigText: {
    fontSize: '52px',
    fontWeight: 'bold',
    color: 'white'
  },
  smallText: {
    fontSize: '32px',
    color: 'white'
  }
}

export default Home;
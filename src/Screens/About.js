import React from 'react';

const About = () => {
  return (
    <div style={styles.contentWrapper}>
      <div style={styles.bigText}>About Kammui</div>
      <div style={styles.smallText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Ipsum.</div>
    </div>
  )
};

const styles = {
  contentWrapper: {
    marginTop: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%',
    textAlign: 'center'
  },
  bigText: {
    fontSize: '52px',
    fontWeight: 'bold',
    color: 'white'
  },
  smallText: {
    marginTop: '20px',
    fontSize: '28px',
    color: '#DCDCDC',
    marginBottom: '20px'
  }
}

export default About;
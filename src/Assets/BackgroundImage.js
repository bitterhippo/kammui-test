import React from 'react';
import KammuiBackground from './kammui_background.png';

const BackgroundImage = ({ brightness }) => {

  const imgConnector = {
    Background: KammuiBackground
  };

  console.log(imgConnector)

  return (
    <img
      style={styles.img}
      src={imgConnector.Background} />
  )
};

const styles = {
  img: {
    width: '100%',
    height: '30vh',
    objectFit: 'cover',
    overflow: 'hidden',
    filter: 'brightness(100%)',
  }
}

export default BackgroundImage;
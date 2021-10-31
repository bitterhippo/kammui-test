import React from 'react';
import KammuiBackground from './kammui_background.png';

const BackgroundImage = ({ brightness }) => {

  const imgConnector = {
    Background: KammuiBackground
  };

  return (
    <img
      style={styles.img}
      src={imgConnector.Background} />
  )
};

const styles = {
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    overflow: 'hidden',
    filter: 'brightness(50%)',
    zIndex: -1,
    position: 'absolute'
  }
}

export default BackgroundImage;
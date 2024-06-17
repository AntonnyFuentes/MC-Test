import {Dimensions} from 'react-native';

export const screenHeight = () => {
  const {height} = Dimensions.get('screen');
  return height;
};

export const screenWidth = () => {
  const {width} = Dimensions.get('screen');
  return width;
};

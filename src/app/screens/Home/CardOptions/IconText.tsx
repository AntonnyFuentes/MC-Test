import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from 'react-native';
import {screenWidth} from '../../../Utils/DeviceUtils';

interface IProps {
  icon: ImageSourcePropType;
  text: string;
  onPressIcon: () => void;
}

const width = (screenWidth() - 38) / 3;

export default function IconText({text, icon, onPressIcon}: IProps) {
  return (
    <TouchableWithoutFeedback onPress={onPressIcon}>
      <View style={styles.iconTextContainer}>
        <Image source={icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  iconTextContainer: {
    width: width,
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontSize: 14,
  },
});

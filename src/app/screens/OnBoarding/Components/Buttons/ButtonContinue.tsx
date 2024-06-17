import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'styled-components/native';

interface IProps {
  showGradiant: boolean;
  gradiantColors: string[];
  buttonHeight?: number;
  buttonText: string;
  disabled?: boolean;
  onPress: () => void;
}

export default function ButtonContinue({
  showGradiant,
  gradiantColors,
  buttonHeight,
  buttonText,
  disabled,
  onPress,
}: IProps) {
  const theme = useTheme();

  const gradiant = disabled
    ? [theme.color.disabledPrimary, theme.color.disabledPrimary]
    : gradiantColors;

  const buttonStyle = {
    ...styles.buttonConatiner,
    backgroundColor: disabled
      ? theme.color.disabledPrimary
      : !showGradiant
      ? 'white'
      : undefined,
    height: buttonHeight ?? 48,
  };

  const buttonTextStyle = {
    ...styles.buttonText,
    color: !showGradiant ? theme.color.primary : 'white',
  };

  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={showGradiant ? 0.8 : 0.9}
      disabled={disabled}
      underlayColor={theme.color.primary}>
      <LinearGradient
        colors={gradiant}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}>
        <View style={buttonStyle}>
          <Text style={buttonTextStyle}>{buttonText}</Text>
        </View>
      </LinearGradient>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 4,
  },
  buttonConatiner: {
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 2,
    marginVertical: 2,
    borderRadius: 4,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

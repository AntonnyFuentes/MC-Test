import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useTheme} from 'styled-components/native';

interface IProps {
  showGradient?: boolean;
  gradientStyle?: ViewStyle;
  children: JSX.Element;
}

export default function GradientCard({
  showGradient,
  children,
  gradientStyle,
}: IProps) {
  const theme = useTheme();

  const colorsGradient = showGradient
    ? [theme.color.primary, theme.color.secondary]
    : ['white', 'white'];

  return (
    <LinearGradient
      colors={colorsGradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[styles.gradient, gradientStyle]}>
      {children && children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: 156,
  },
});

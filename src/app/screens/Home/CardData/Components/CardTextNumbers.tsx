import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';

interface IProps {
  title: string;
  number: string | number;
  titleColor?: string;
  titleFontSize?: number;
}

export default function CardTextNumbers({
  title,
  titleColor,
  titleFontSize,
  number,
}: IProps) {
  const theme = useTheme();

  const titleStyle = {
    fontSize: titleFontSize ?? 16,
    color: titleColor ?? theme.color.primary,
  };

  return (
    <View style={styles.cardNumberContainer}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={styles.numberText}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardNumberContainer: {
    alignItems: 'center',
    gap: 4,
  },
  numberText: {
    fontSize: 22,
    fontWeight: '600',
  },
});

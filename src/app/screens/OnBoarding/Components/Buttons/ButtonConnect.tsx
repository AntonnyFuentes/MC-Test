import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'styled-components/native';
import {useTranslation} from 'react-i18next';

interface IProps {
  isConnected: boolean;
  onPress: () => void;
}

export default function ButtonConnect({isConnected, onPress}: IProps) {
  const {t} = useTranslation();
  const theme = useTheme();

  const buttonStyle = {
    ...styles.buttonConatiner,
    backgroundColor: !isConnected ? 'white' : undefined,
  };

  const buttonTextStyle = {
    ...styles.buttonText,
    color: !isConnected ? theme.color.primary : 'white',
  };

  const buttonText = !isConnected ? t('connect') : t('connected');

  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={0.6}
      disabled={isConnected}
      underlayColor={theme.color.primary}>
      <LinearGradient
        colors={[theme.color.primary, theme.color.secondary]}
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
    fontSize: 14,
    fontWeight: '700',
  },
});

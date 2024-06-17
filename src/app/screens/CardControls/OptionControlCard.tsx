import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useTheme} from 'styled-components';
import {useTranslation} from 'react-i18next';

import GradientCard from '../../components/GradientCard';
import {MainCardControls} from './constants';

export default function OptionControlCard({text, svg}: MainCardControls) {
  const theme = useTheme();
  const {t} = useTranslation();

  const textStyle = {
    ...styles.text,
    color: theme.color.primary,
  };

  const onPressCard = () => {
    //navigation.navigate(navigationScreen as never)
  };

  return (
    <TouchableWithoutFeedback onPress={onPressCard}>
      <GradientCard showGradient={true} gradientStyle={styles.gradientStyle}>
        <View style={styles.contentContainer}>
          <SvgUri uri={svg} />
          <Text style={textStyle}>{t(text)}</Text>
        </View>
      </GradientCard>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    borderRadius: 2,
    marginVertical: 2,
    gap: 8,
    height: 88,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  gradientStyle: {
    borderRadius: 4,
    paddingHorizontal: 2,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
});

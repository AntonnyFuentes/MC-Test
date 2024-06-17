import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useTranslation} from 'react-i18next';

import {ARROW_RIGHT_URI} from '../../constants/svgs';

interface IProps {
  svg: string;
  title: string;
  subtitle?: string;
  navigationScreen: string;
}

export default function OptionSettings({title, svg, subtitle}: IProps) {
  const {t} = useTranslation();

  const onPressCard = () => {
    //navigation.navigate(navigationScreen as never)
  };

  return (
    <TouchableWithoutFeedback onPress={onPressCard}>
      <View style={styles.container}>
        <View style={styles.titleIcon}>
          <SvgUri uri={svg} />
          <Text style={styles.text}>{t(title)}</Text>
        </View>
        <View style={styles.titleIcon}>
          {subtitle !== undefined && (
            <Text style={styles.text}>{t(subtitle)}</Text>
          )}
          <SvgUri uri={ARROW_RIGHT_URI} color={'#ADADAD'} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    height: 73,
    borderColor: '#EBEBEB',
    borderBottomWidth: 1,
  },
  titleIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
  },
});

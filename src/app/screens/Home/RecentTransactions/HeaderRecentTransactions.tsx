import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SvgUri} from 'react-native-svg';

import {ARROW_RIGHT_URI} from '../../../constants/svgs';

export default function HeaderRecentTransactions() {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('recentTransactions')}</Text>
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.buttonContainer}>
          <Text>{t('viewAll')}</Text>
          <SvgUri uri={ARROW_RIGHT_URI} color={'#333333'} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    flexDirection: 'row',
    paddingVertical: 13,
    paddingHorizontal: 13,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});

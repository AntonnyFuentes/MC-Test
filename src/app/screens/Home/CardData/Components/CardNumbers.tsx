import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';
import {useTranslation} from 'react-i18next';
import Clipboard from '@react-native-clipboard/clipboard';

import {Card} from '../../../../database/types';

import ButtonContinue from '../../../OnBoarding/Components/Buttons/ButtonContinue';
import CardTextNumbers from './CardTextNumbers';
import {
  getExpirationDateFormat,
  getCardNumbersFormat,
} from '../../../../Utils/textFormats';

interface IProps {
  currentCard: Card;
}

export default function CardNumbers({currentCard}: IProps) {
  const {t} = useTranslation();
  const theme = useTheme();

  const copyToClipboard = () => {
    Clipboard.setString(currentCard.number.toString());
  };

  return (
    <View style={styles.sensitiveDataContainer}>
      <CardTextNumbers
        title={t('cardNumber')}
        number={getCardNumbersFormat(currentCard.number)}
      />
      <View style={styles.horizontalSeparator} />
      <View style={styles.dateAndCvcContainer}>
        <CardTextNumbers
          title={t('expirationDate')}
          number={getExpirationDateFormat(
            currentCard.expirationMonth,
            currentCard.expirationYear,
          )}
        />
        <View style={styles.verticalSeparator} />
        <CardTextNumbers title={t('cvc')} number={currentCard.cvc} />
      </View>
      <View style={styles.copyButton}>
        <ButtonContinue
          showGradiant={false}
          onPress={copyToClipboard}
          buttonText={t('copyCardNumber')}
          gradiantColors={[theme.color.primary, theme.color.secondary]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sensitiveDataContainer: {
    marginTop: 16,
    padding: 24,
    width: '100%',
  },
  horizontalSeparator: {
    height: 1,
    width: '100%',
    marginVertical: 24,
    backgroundColor: '#ADADAD',
  },
  dateAndCvcContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  verticalSeparator: {
    width: 1,
    backgroundColor: '#ADADAD',
    marginHorizontal: 32,
  },
  copyButton: {
    marginTop: 24,
  },
});

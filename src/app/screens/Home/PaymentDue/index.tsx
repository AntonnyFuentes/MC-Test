import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Card} from '../../../database/types';
import {moneyFormat} from '../../../Utils/textFormats';
import {useTheme} from 'styled-components';
import CardTextNumbers from '../CardData/Components/CardTextNumbers';
import ButtonContinue from '../../../screens/OnBoarding/Components/Buttons/ButtonContinue';

interface IProps {
  cardSelected: Card;
}

export default function PaymentDue({cardSelected}: IProps) {
  const theme = useTheme();
  const {t} = useTranslation();

  const titleStyle = {
    ...styles.title,
    color: theme.color.primary,
  };

  const daysText = cardSelected.daysToPay === 1 ? t('day') : t('days');

  const makePaymentHandler = () => {};

  return (
    <View style={styles.container}>
      <Text style={titleStyle}>{`${t('paymentDueIn')} ${
        cardSelected.daysToPay
      } ${daysText}`}</Text>
      <View style={styles.paymentContainer}>
        <CardTextNumbers
          number={moneyFormat(cardSelected.statementBalance)}
          title={t('statementBalance')}
          titleColor="#5C5C5C"
          titleFontSize={14}
        />
        <View style={styles.verticalSeparator} />
        <CardTextNumbers
          number={moneyFormat(cardSelected.minimunPayment)}
          title={t('minimunPayment')}
          titleColor="#5C5C5C"
          titleFontSize={14}
        />
      </View>
      <View style={styles.makePayButton}>
        <ButtonContinue
          showGradiant={false}
          onPress={makePaymentHandler}
          buttonText={t('makePayment')}
          gradiantColors={[theme.color.primary, theme.color.secondary]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginVertical: 16,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  paymentContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  verticalSeparator: {
    width: 1,
    backgroundColor: '#EBEBEB',
    marginHorizontal: 22,
  },
  makePayButton: {
    width: '100%',
  },
});

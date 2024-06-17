import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Transaction} from '../../../database/types';
import {moneyFormat} from '../../../Utils/textFormats';

interface IProps {
  transaction: Transaction;
}

export default function TransactionItem({transaction}: IProps) {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.establishmentContainer}>
        <Image source={transaction.establishmentImage} style={styles.image} />
        <View style={styles.gapData}>
          <Text style={styles.mainText}>{transaction.establishment}</Text>
          <Text style={[styles.subText, styles.dateColor]}>
            {transaction.date}
          </Text>
        </View>
      </View>
      <View style={[styles.gapData, styles.priceContainer]}>
        <Text style={styles.mainText}>{moneyFormat(transaction.payment)}</Text>
        {transaction.applyPoints && (
          <Text style={[styles.subText, styles.pointsColor]}>{`+${
            transaction.pointAcumulated
          } ${t('pts')}`}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor: '#EBEBEB',
    borderBottomWidth: 1,
  },
  establishmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  gapData: {
    gap: 4,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  mainText: {
    fontSize: 16,
    lineHeight: 20,
  },
  subText: {
    fontSize: 14,
    lineHeight: 18,
  },
  pointsColor: {
    color: '#618DFF',
  },
  dateColor: {
    color: '#ADADAD',
  },
});

import React, {useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import * as Progress from 'react-native-progress';

import {Card} from '../../../database/types';
import {moneyFormat} from '../../../Utils/textFormats';
import {useTheme} from 'styled-components';
import {screenWidth} from '../../../Utils/DeviceUtils';

interface IProps {
  cardSelected: Card;
}

const widthBar = screenWidth() - 48;

export default function Balance({cardSelected}: IProps) {
  const theme = useTheme();
  const {t} = useTranslation();

  const progress = useMemo(() => {
    return cardSelected.currentBalance / cardSelected.totalCreditLimit;
  }, [cardSelected]);

  const availableCredit = useMemo(() => {
    return cardSelected.totalCreditLimit - cardSelected.currentBalance;
  }, [cardSelected]);

  return (
    <View style={styles.container}>
      <Text style={styles.balanceNumber}>
        {moneyFormat(cardSelected.currentBalance)}
      </Text>
      <Text style={styles.balanceText}>{t('currentBalance')}</Text>
      <Progress.Bar
        progress={progress}
        height={8}
        width={widthBar}
        borderWidth={0}
        style={styles.progressBar}
        color={theme.color.success}
        unfilledColor="#EBEBEB"
      />
      <View style={styles.creditsContainer}>
        <View style={styles.creditsData}>
          <Text style={styles.creditText}>{t('availableCredit')}:</Text>
          <Text style={styles.creditText}>{moneyFormat(availableCredit)}</Text>
        </View>
        <View style={styles.creditsData}>
          <Text style={styles.creditText}>{t('totalCreditLimit')}:</Text>
          <Text style={styles.creditText}>
            {moneyFormat(cardSelected.totalCreditLimit)}
          </Text>
        </View>
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
    marginTop: 16,
  },
  balanceNumber: {
    fontSize: 30,
    fontWeight: '600',
  },
  balanceText: {
    fontSize: 14,
    marginTop: 4,
    lineHeight: 18,
    color: '#5C5C5C',
  },
  progressBar: {
    marginVertical: 24,
  },
  creditsContainer: {
    gap: 8,
    width: '100%',
  },
  creditsData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  creditText: {
    fontSize: 14,
    lineHeight: 18,
  },
});

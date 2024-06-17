import React from 'react';
import {StyleSheet, ScrollView, Animated} from 'react-native';

import {heightVisibleOfHiddenView} from './constants';

import CardData from './CardData';
import CardOptions from './CardOptions';
import Balance from './Balance';
import PaymentDue from './PaymentDue';
import RecentTransactions from './RecentTransactions';
import {useCardData} from './CardData/useCardData';

export default function Home() {
  const {
    bounceValue,
    cardSelected,
    cardIsHidden,
    cardTransactions,
    hideShowCards,
    onPressLock,
  } = useCardData();

  const bodyStyle = {
    ...styles.animatedStyle,
    ...styles.cardShadow,
    marginBottom: cardIsHidden ? heightVisibleOfHiddenView : 0,
  };

  return (
    <ScrollView>
      <CardData />
      <Animated.View
        style={[bodyStyle, {transform: [{translateY: bounceValue}]}]}>
        <CardOptions
          isCardLocked={cardSelected.isLocked}
          onPressCardDetails={hideShowCards}
          onPressLock={onPressLock}
        />
        <Balance cardSelected={cardSelected} />
        <PaymentDue cardSelected={cardSelected} />
        <RecentTransactions transactions={cardTransactions} />
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  animatedStyle: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    paddingBottom: 16,
  },
  cardShadow: {
    shadowColor: '#ADADAD',
    shadowOffset: {
      width: 0,
      height: -1.4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
});

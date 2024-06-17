import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import {heightHiddenView} from '../constants';

import CardImage from './Components/CardImage';
import CardNumbers from './Components/CardNumbers';
import {useCardData} from './useCardData';
import {screenWidth} from '../../../Utils/DeviceUtils';
import {APPLE_WALLET} from '../../../constants/images';

export default function CardData() {
  const {cards, cardSelected, onScrollCard} = useCardData();

  const last4numbers = cardSelected.number.toString().slice(12, 16);

  return (
    <View style={styles.hiddenContainer}>
      <Text
        style={
          styles.typeCardText
        }>{`${cardSelected.typeCard} •••• ${last4numbers}`}</Text>
      <Carousel
        width={screenWidth()}
        height={170}
        data={cards}
        style={styles.carrouselMargin}
        scrollAnimationDuration={400}
        modeConfig={{
          parallaxScrollingOffset: 100,
          parallaxScrollingScale: 0.9,
          parallaxAdjacentItemScale: 0.9,
        }}
        mode="parallax"
        loop={false}
        onProgressChange={onScrollCard}
        renderItem={({item}) => <CardImage card={item} />}
      />
      <Image source={APPLE_WALLET} style={styles.appleWalletImage} />
      <CardNumbers currentCard={cardSelected} />
    </View>
  );
}

const styles = StyleSheet.create({
  hiddenContainer: {
    width: '100%',
    height: heightHiddenView,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    marginBottom: 9,
  },
  typeCardText: {
    fontSize: 16,
    marginTop: 24,
  },
  carrouselMargin: {
    marginVertical: 20,
  },
  appleWalletImage: {
    height: 42,
    width: 136,
  },
});

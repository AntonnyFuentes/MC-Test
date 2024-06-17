import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Card} from '../../../../database/types';

interface IProps {
  card: Card;
}

export default function CardImage({card}: IProps) {
  const image = card.isLocked ? card.cardImageLocked : card.cardImage;

  return (
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 180,
    width: 280,
  },
});

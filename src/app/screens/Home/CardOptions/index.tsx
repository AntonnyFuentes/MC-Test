import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import {
  CONTROLS,
  LOCKED_CARD,
  LOCK_CARD,
  CARD_DETAILS,
} from '../../../constants/images';
import IconText from './IconText';
import {useNavigation} from '@react-navigation/native';
import {CardRoutes} from '../../../navigator/Routes';

interface IProps {
  isCardLocked: boolean;
  onPressCardDetails: () => void;
  onPressLock: () => void;
}

export default function CardOptions({
  isCardLocked,
  onPressCardDetails,
  onPressLock,
}: IProps) {
  const {t} = useTranslation();
  const navigate = useNavigation();

  const onPressControls = () => {
    navigate.navigate(CardRoutes.CardControls as never);
  };

  return (
    <View style={styles.container}>
      <IconText
        icon={CONTROLS}
        text={t('controls')}
        onPressIcon={onPressControls}
      />
      <IconText
        icon={isCardLocked ? LOCKED_CARD : LOCK_CARD}
        text={t(isCardLocked ? 'lockedCard' : 'lockCard')}
        onPressIcon={onPressLock}
      />
      <IconText
        icon={CARD_DETAILS}
        text={t('cardDetails')}
        onPressIcon={onPressCardDetails}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 32,
    paddingHorizontal: 19,
  },
  iconTextContainer: {
    alignItems: 'center',
    gap: 8,
  },
});

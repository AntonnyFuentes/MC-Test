import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Image,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import {SvgUri} from 'react-native-svg';

import {POP_UP_CIRCLE} from '../../../../constants/images';
import {CROSS} from '../../../../constants/svgs';

import ButtonContinue from '../Buttons/ButtonContinue';

interface IProps {
  modalVisible: boolean;
  onPressViewDashboard: () => void;
  closeModal: () => void;
}

export default function ModalAllSet({
  modalVisible,
  onPressViewDashboard,
  closeModal,
}: IProps) {
  const {t} = useTranslation();
  const theme = useTheme();

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalStyle}>
        <View style={styles.modalContentContainer}>
          <Image source={POP_UP_CIRCLE} style={styles.allSetImage} />
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.closeIconView}>
              <SvgUri uri={CROSS} color={'black'} />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.titlesContainer}>
            <Text style={styles.title}>{t('allSet')}</Text>
            <Text style={styles.subtitle}>{t('enjoyDigitalJourney')}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonContinue
              showGradiant={true}
              onPress={onPressViewDashboard}
              buttonText={t('viewDashboard')}
              gradiantColors={[theme.color.primary, theme.color.secondary]}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContentContainer: {
    height: 340,
    width: 327,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  allSetImage: {
    width: 96,
    height: 96,
    zIndex: 1,
    position: 'absolute',
    top: -48,
  },
  closeIconView: {
    zIndex: 1,
    position: 'absolute',
    top: 24,
    right: 34,
  },
  titlesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 26,
    marginBottom: 24,
  },
  subtitle: {
    fontWeight: '600',
    fontSize: 18,
    color: '#5C5C5C',
  },
  buttonsContainer: {
    width: 271,
    marginVertical: 32,
  },
});

import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import GradientCard from '../../../components/GradientCard';
import ButtonConnect from '../Components/Buttons/ButtonConnect';
import ModalConnectService from '../Components/Modals/ModalConnectService';
import ModalSuccessfull from '../Components/Modals/ModalSuccessfull';
import {CHECK_ICON} from '../../../constants/images';
import {useServiceCard} from './useServiceCard';
import {Service} from '../types';

interface IProps {
  service: Service;
}

export default function ServiceCard({service}: IProps) {
  const {
    isServiceConnected,
    connectModalVisible,
    successfullyModalVisible,
    onPressConnectServiceCard,
    closeConnectModal,
    onPressSubmitData,
  } = useServiceCard();

  return (
    <View style={styles.cardShadow}>
      <GradientCard showGradient={isServiceConnected}>
        <View style={styles.contentContainer}>
          <Image source={service.image} style={styles.image} />
          <ButtonConnect
            isConnected={isServiceConnected}
            onPress={() => onPressConnectServiceCard(service.id)}
          />
          {isServiceConnected && (
            <Image source={CHECK_ICON} style={styles.checkIcon} />
          )}
        </View>
      </GradientCard>
      <ModalConnectService
        modalVisible={connectModalVisible}
        service={service}
        closeModal={closeConnectModal}
        onPressSubmitData={onPressSubmitData}
      />
      <ModalSuccessfull modalVisible={successfullyModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 11,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  contentContainer: {
    backgroundColor: 'white',
    marginVertical: 4,
    borderRadius: 2,
    width: 148,
    height: 178,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 72,
    height: 72,
    resizeMode: 'contain',
    borderRadius: 72 / 2,
  },
  checkIcon: {
    width: 25,
    height: 25,
    zIndex: 1,
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

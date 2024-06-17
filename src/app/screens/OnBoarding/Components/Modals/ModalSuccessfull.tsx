import React from 'react';
import {StyleSheet, View, Modal, Image} from 'react-native';

import {CONFIRMATION_CONNECTION} from '../../../../constants/images';

interface IProps {
  modalVisible: boolean;
}

export default function ModalSuccessfull({modalVisible}: IProps) {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalStyle}>
        <Image
          source={CONFIRMATION_CONNECTION}
          style={styles.confimationImage}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  confimationImage: {
    width: 150,
    height: 150,
  },
});

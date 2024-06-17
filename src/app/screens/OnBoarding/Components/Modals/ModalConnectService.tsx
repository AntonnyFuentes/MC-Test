import React, {useState, useMemo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SvgUri} from 'react-native-svg';

import {CROSS} from '../../../../constants/svgs';

import ButtonContinue from '../Buttons/ButtonContinue';
import TextInputOnBoarding from '../TextInputs/TextInputOnBoarding';
import {Service} from '../../types';
import {validateEmail, validatePassword} from '../../../../Utils/validations';

interface IProps {
  modalVisible: boolean;
  service: Service;
  onPressSubmitData: () => void;
  closeModal: () => void;
}

export default function ModalConnectService({
  modalVisible,
  service,
  onPressSubmitData,
  closeModal,
}: IProps) {
  const {t} = useTranslation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');

  const diabledConnectButton = useMemo(() => {
    if (password.length < 5 || email.length < 2) {
      return true;
    }
    return false;
  }, [email, password]);

  const colorLineStyle = {
    ...styles.colorLine,
    backgroundColor: service.mainColor,
  };

  const onChangeText = (value: string, setValue: (v: string) => void) => {
    setValue(value);
    if (inputError) {
      setInputError(false);
    }
  };

  const onCloseModal = () => {
    setEmail('');
    setPassword('');
    closeModal();
  };

  const onPressConnectValidation = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) {
      setInputError(true);
      setErrorText(t('emailInvalid'));
    } else if (passwordError) {
      setInputError(true);
      setErrorText(t('passwordInvalid'));
    } else {
      setInputError(false);
      onPressSubmitData();
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalStyle}>
        <View style={colorLineStyle} />
        <View style={styles.modalContentContainer}>
          <View style={styles.logoContainer}>
            <Image source={service.image} style={styles.iconImage} />
            <Text style={styles.iconText}>{`${t('connect')} ${
              service.id
            }`}</Text>
            <TouchableWithoutFeedback onPress={onCloseModal}>
              <View style={styles.closeIconView}>
                <SvgUri uri={CROSS} color={'black'} />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.inputsContainer}>
              <TextInputOnBoarding
                value={email}
                error={inputError}
                setValue={v => onChangeText(v, setEmail)}
                title={t('userName')}
              />
              <TextInputOnBoarding
                value={password}
                error={inputError}
                setValue={v => onChangeText(v, setPassword)}
                title={t('password')}
                isPassword
              />
            </View>
            {inputError && <Text style={styles.errorText}>{errorText}</Text>}
            <Text style={styles.termsAndConditionText}>
              {`${t('termsNConditionsConnect')} ${service.id}.`}
            </Text>
            <ButtonContinue
              showGradiant={true}
              disabled={diabledConnectButton}
              onPress={onPressConnectValidation}
              gradiantColors={[service.mainColor, service.mainColor]}
              buttonText={t('connect')}
              buttonHeight={42}
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
  colorLine: {
    width: '95%',
    height: 10,
  },
  modalContentContainer: {
    width: '95%',
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 80 / 2,
    marginVertical: 26,
  },
  iconText: {
    fontWeight: '600',
    fontSize: 22,
  },
  closeIconView: {
    zIndex: 1,
    position: 'absolute',
    top: 17,
    right: 23,
    padding: 3,
  },
  bodyContainer: {
    marginHorizontal: 24,
    marginTop: 28,
    marginBottom: 32,
  },
  inputsContainer: {
    gap: 16,
  },
  errorText: {
    fontSize: 11,
    color: 'red',
    marginTop: 7,
  },
  termsAndConditionText: {
    fontSize: 12,
    marginVertical: 22,
    maxWidth: 320,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

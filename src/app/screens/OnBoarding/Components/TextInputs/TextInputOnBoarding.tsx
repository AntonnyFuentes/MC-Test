import React, {useState} from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {VISIBLE, INVISIBLE} from '../../../../constants/images';

interface IProps {
  value: string;
  title: string;
  setValue: (value: string) => void;
  error?: boolean;
  isPassword?: boolean;
}

export default function TextInputOnBoarding({
  value,
  title,
  isPassword,
  error,
  setValue,
}: IProps) {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const errorInput = error ? styles.textInputError : undefined;

  return (
    <View>
      <Text style={styles.titleTextInput}>{title}</Text>
      <View style={[styles.textInputContainer, errorInput]}>
        <TextInput
          value={value}
          onChangeText={setValue}
          secureTextEntry={isPassword && !passwordVisible}
          autoCapitalize="none"
          style={[styles.textInput, styles.textInputLabel]}
        />
        {isPassword && (
          <TouchableWithoutFeedback
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <View style={styles.eyeIconView}>
              <Image
                source={passwordVisible ? VISIBLE : INVISIBLE}
                style={styles.eyeIcon}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleTextInput: {
    fontWeight: '400',
    fontSize: 12,
    marginBottom: 8,
  },
  textInputContainer: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 4,
  },
  textInput: {
    flex: 1,
    height: 20,
    marginHorizontal: 14,
  },
  textInputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  textInputLabel: {
    fontSize: 16,
  },
  eyeIconView: {
    margin: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
});

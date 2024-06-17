import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';
import {MEXICO_FLAG, USA_FLAG} from '../constants/images';
import {CROSS, ARROW_RIGHT_URI} from '../constants/svgs';
import {useCardData} from '../screens/Home/CardData/useCardData';
import {useNavigation} from '@react-navigation/native';
import {SvgUri} from 'react-native-svg';

interface IProps {
  title: string;
  colorsGradient: string[];
  backArrow?: boolean;
}

export default function HeaderScreens({
  title,
  backArrow,
  colorsGradient,
}: IProps) {
  const {t, i18n} = useTranslation();
  const {cardIsHidden, hideShowCards} = useCardData();
  const navigation = useNavigation();

  const [selectLanguage, setSelectLanguage] = useState<string>('');

  const iconStyle = {
    ...styles.closeIcon,
    transform: backArrow ? [{rotateY: '180deg'}] : undefined,
  };

  const changeLanguage = (code: string) => {
    if (code !== selectLanguage) {
      i18n.changeLanguage(code);
      setSelectLanguage(code);
    }
  };

  useEffect(() => {
    const languageCode = i18n.language;
    setSelectLanguage(languageCode);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBackNavigation = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={colorsGradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.linearGradient}>
      {cardIsHidden && !backArrow ? (
        <View style={styles.container} />
      ) : (
        <TouchableWithoutFeedback
          onPress={backArrow ? goBackNavigation : hideShowCards}>
          <View style={styles.container}>
            <SvgUri
              uri={backArrow ? ARROW_RIGHT_URI : CROSS}
              color={'white'}
              style={iconStyle}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
      <View style={styles.container}>
        <Text style={styles.headerText}>{t(title)}</Text>
      </View>
      {selectLanguage && (
        <View style={styles.langContainer}>
          <TouchableWithoutFeedback onPress={() => changeLanguage('en')}>
            <Image source={USA_FLAG} style={styles.flag} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => changeLanguage('es')}>
            <Image source={MEXICO_FLAG} style={styles.flag} />
          </TouchableWithoutFeedback>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  linearGradient: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: '#ffffff',
  },
  langContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 5,
    gap: 15,
  },
  flag: {
    width: 25,
    height: 25,
  },
  closeIcon: {
    marginLeft: 22,
    marginBottom: 4,
  },
});

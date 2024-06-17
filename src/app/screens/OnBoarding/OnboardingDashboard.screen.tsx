import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';

import ServiceCard from './ServiceCard/ServiceCard';
import ButtonContinue from './Components/Buttons/ButtonContinue';
import ModalAllSet from './Components/Modals/ModalAllSet';
import {services} from './types';
import {useOnBoarding} from './useOnBoarding';

export default function OnboardingDashboardScreen() {
  const theme = useTheme();
  const {t} = useTranslation();
  const {
    allSetModalVisible,
    hasOneServiceConnected,
    openAllSetModal,
    closeAllSetModal,
    goToMainDashboard,
  } = useOnBoarding();

  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>{t('connectProviders')}</Text>
      <Text style={styles.subtitle}>{t('connectProvidersDescription')}</Text>
      <View>
        <FlatList
          data={services}
          keyExtractor={(item, index) => index.toString()}
          style={styles.listStyle}
          contentContainerStyle={styles.contentList}
          renderItem={({item}) => <ServiceCard service={item} />}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonContinue
          showGradiant={true}
          onPress={openAllSetModal}
          gradiantColors={[theme.color.primary, theme.color.secondary]}
          buttonText={t('continue')}
          disabled={!hasOneServiceConnected}
        />
        <ButtonContinue
          showGradiant={false}
          onPress={goToMainDashboard}
          buttonText={t('skipForNow')}
          gradiantColors={[theme.color.primary, theme.color.secondary]}
        />
      </View>
      <ModalAllSet
        modalVisible={allSetModalVisible}
        onPressViewDashboard={goToMainDashboard}
        closeModal={closeAllSetModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 33,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 17,
    textAlign: 'center',
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 16,
    maxWidth: 300,
    textAlign: 'center',
    alignSelf: 'center',
  },
  listStyle: {
    marginTop: 26,
    marginBottom: 36,
  },
  contentList: {
    alignItems: 'center',
  },
  columnWrapper: {
    marginTop: 10,
    marginBottom: 8,
    gap: 15,
  },
  buttonsContainer: {
    marginHorizontal: 25,
    gap: 16,
  },
});

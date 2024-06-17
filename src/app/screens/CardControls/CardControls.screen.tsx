import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';

import OptionControlCard from './OptionControlCard';
import OptionSettings from './OptionSettings';
import {
  mainCardControlsOptions,
  securitySettings,
  usersSubscriptions,
  spendSettings,
  extraSettings,
} from './constants';

export default function CardControls() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <FlatList
          data={mainCardControlsOptions}
          keyExtractor={(item, index) => index.toString()}
          style={styles.listCards}
          contentContainerStyle={styles.contentList}
          renderItem={({item}) => (
            <OptionControlCard
              text={item.text}
              svg={item.svg}
              navigationScreen={item.navigationScreen}
            />
          )}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          scrollEnabled={false}
        />
      </View>
      <FlatList
        data={securitySettings}
        style={styles.listSetting}
        renderItem={({item}) => (
          <OptionSettings
            svg={item.svg}
            navigationScreen={item.navigationScreen}
            subtitle={item.subtitle}
            title={item.text}
          />
        )}
        scrollEnabled={false}
      />
      <FlatList
        data={usersSubscriptions}
        style={styles.listSetting}
        renderItem={({item}) => (
          <OptionSettings
            svg={item.svg}
            navigationScreen={item.navigationScreen}
            subtitle={item.subtitle}
            title={item.text}
          />
        )}
        scrollEnabled={false}
      />
      <FlatList
        data={spendSettings}
        style={styles.listSetting}
        renderItem={({item}) => (
          <OptionSettings
            svg={item.svg}
            navigationScreen={item.navigationScreen}
            subtitle={item.subtitle}
            title={item.text}
          />
        )}
        scrollEnabled={false}
      />
      <FlatList
        data={extraSettings}
        style={styles.listSetting}
        renderItem={({item}) => (
          <OptionSettings
            svg={item.svg}
            navigationScreen={item.navigationScreen}
            subtitle={item.subtitle}
            title={item.text}
          />
        )}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
  },
  listCards: {
    marginTop: 16,
  },
  contentList: {
    alignItems: 'center',
  },
  columnWrapper: {
    marginBottom: 16,
    gap: 16,
  },
  listSetting: {
    marginBottom: 12,
  },
});

import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import HeaderRecentTransactions from './HeaderRecentTransactions';
import TransactionItem from './TransactionItem';
import {Transaction} from '../../../database/types';

interface IProps {
  transactions: Transaction[];
}

export default function RecentTransactions({transactions}: IProps) {
  return (
    <View style={styles.container}>
      <HeaderRecentTransactions />
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <TransactionItem transaction={item} />}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

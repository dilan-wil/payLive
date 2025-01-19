import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const transactions = [
  { id: '1', date: '2023-05-15', amount: 250.00, items: 3, status: 'Completed' },
  { id: '2', date: '2023-05-14', amount: 175.50, items: 2, status: 'Processing' },
  { id: '3', date: '2023-05-13', amount: 320.75, items: 4, status: 'Completed' },
  { id: '4', date: '2023-05-12', amount: 89.99, items: 1, status: 'Completed' },
  { id: '5', date: '2023-05-11', amount: 150.00, items: 2, status: 'Cancelled' },
];

const TransactionItem = ({ item }: {item: any}) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionHeader}>
      <Text style={styles.transactionDate}>{item.date}</Text>
      <Text style={[styles.transactionAmount, { color: getStatusColor(item.status) }]}>
        ${item.amount.toFixed(2)}
      </Text>
    </View>
    <Text style={styles.transactionDetails}>{item.items} items</Text>
    <Text style={[styles.transactionStatus, { color: getStatusColor(item.status) }]}>
      {item.status}
    </Text>
  </View>
);

const getStatusColor = (status: any) => {
  switch (status) {
    case 'Completed':
      return 'green';
    case 'Processing':
      return 'orange';
    case 'Cancelled':
      return 'red';
    default:
      return 'black';
  }
};

export default function TransactionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  transactionItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  transactionDate: {
    fontWeight: 'bold',
  },
  transactionAmount: {
    fontWeight: 'bold',
  },
  transactionDetails: {
    color: 'gray',
  },
  transactionStatus: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});


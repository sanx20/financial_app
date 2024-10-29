import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const TransactionDetailScreen = ({ route }) => {
    const { transaction } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transaction Details</Text>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{transaction.name}</Text>
            <Text style={styles.label}>Amount</Text>
            <Text style={styles.value}>${transaction.amount.toFixed(2)}</Text>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>{transaction.date}</Text>
            <Text style={styles.label}>Type</Text>
            <Text style={styles.value}>{transaction.type}</Text>
            <Text style={styles.label}>Category</Text>
            <Text style={styles.value}>{transaction.category}</Text>
            <Text style={styles.label}>Payment Method</Text>
            <Text style={styles.value}>{transaction.paymentMethod}</Text>
            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>{transaction.status}</Text>
        </View>
    );
};

export default TransactionDetailScreen;

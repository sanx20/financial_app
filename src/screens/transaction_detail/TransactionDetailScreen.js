import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
    const { transaction } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transaction Detail</Text>
            <Text>{`Transaction Name: ${transaction.name}`}</Text>
            <Text>{`Amount: $${transaction.amount}`}</Text>
            <Text>{`Date: ${transaction.date}`}</Text>
            <Text>{`Type: ${transaction.type}`}</Text>
            <Text>{`Payment Method: ${transaction.paymentMethod}`}</Text>
            <Text>{`Status: ${transaction.status}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default TransactionDetailScreen;

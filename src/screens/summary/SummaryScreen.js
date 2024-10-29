import React from 'react';
import { View, Text } from 'react-native';

const transactions = [
    { id: '1', name: 'Groceries', amount: 50 },
    { id: '2', name: 'Rent', amount: 1200 },
    { id: '3', name: 'Utilities', amount: 100 },
];

const SummaryScreen = () => {
    const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

    return (
        <View style={{ padding: 20 }}>
            <Text>Total Expenses: ${totalExpenses}</Text>
        </View>
    );
};

export default SummaryScreen;

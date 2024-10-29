import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const SummaryScreen = () => {
    const transactions = useSelector((state) => state.transactions);

    const totalExpenses = transactions
        .filter((transaction) => transaction.type === 'Expense')
        .reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalIncome = transactions
        .filter((transaction) => transaction.type === 'Income')
        .reduce((sum, transaction) => sum + transaction.amount, 0);

    return (
        <View style={{ padding: 20 }}>
            <Text>{`Total Expenses: $${totalExpenses}`}</Text>
            <Text>{`Total Income: $${totalIncome}`}</Text>
            <Text>{`Balance: $${totalIncome - totalExpenses}`}</Text>
        </View>
    );
};

export default SummaryScreen;

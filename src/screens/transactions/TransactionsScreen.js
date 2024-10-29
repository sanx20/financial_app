import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const transactions = [
    { id: '1', name: 'Groceries', amount: 50, date: '2024-10-29' },
    { id: '2', name: 'Rent', amount: 1200, date: '2024-10-01' },
    { id: '3', name: 'Utilities', amount: 100, date: '2024-10-15' },
];

const TransactionsScreen = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
        >
            <View style={{ padding: 20 }}>
                <Text>{item.name}</Text>
                <Text>{`Amount: $${item.amount}`}</Text>
                <Text>{item.date}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default TransactionsScreen;

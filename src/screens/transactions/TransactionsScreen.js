import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Transaction from '../../components/transaction/Transaction';

const TransactionsScreen = () => {
    const transactions = useSelector((state) => state.transactions);

    const renderItem = ({ item }) => <Transaction transaction={item} />;

    return (
        <View style={styles.container}>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default TransactionsScreen;

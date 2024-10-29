import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { removeTransaction } from '../../redux/transactionSlice';

const Transaction = ({ transaction }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('TransactionDetail', { transaction });
    };

    const handleRemove = () => {
        dispatch(removeTransaction(transaction.id));
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.transactionContainer}>
                <Text style={styles.transactionName}>{transaction.name}</Text>
                <Text>{`Amount: $${transaction.amount}`}</Text>
                <Text>{`Date: ${transaction.date}`}</Text>
                <Text>{`Type: ${transaction.type}`}</Text>
                <Text>{`Payment Method: ${transaction.paymentMethod}`}</Text>
                <Text>{`Status: ${transaction.status}`}</Text>
                <Button title="Remove" onPress={handleRemove} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    transactionContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    transactionName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Transaction;

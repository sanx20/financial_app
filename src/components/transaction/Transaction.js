import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Transaction = ({ transaction }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('TransactionDetail', { transaction });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.transactionContainer}>
                <Text style={styles.transactionName}>{transaction.name}</Text>
                <Text style={styles.text}>{`Amount: $${transaction.amount.toFixed(2)}`}</Text>
                <Text style={styles.text}>{`Date: ${transaction.date}`}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Transaction;

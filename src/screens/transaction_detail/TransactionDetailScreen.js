import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const TransactionDetailScreen = ({ route }) => {
    const { transaction } = route.params;
    const navigation = useNavigation();

    const handleEdit = () => {
        navigation.navigate('AddEditTransaction', { transaction });
    };

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

            <Button title="Edit Transaction" onPress={handleEdit} />
        </View>
    );
};

export default TransactionDetailScreen;

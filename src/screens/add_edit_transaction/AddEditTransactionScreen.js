import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTransaction, updateTransaction } from '../../redux/transactionSlice';
import { useNavigation, useRoute } from '@react-navigation/native';
import uuid from 'react-uuid';
import styles from './style';

const AddEditTransactionScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const transactionToEdit = route.params?.transaction;
    const isEditing = Boolean(transactionToEdit);

    const [name, setName] = useState(transactionToEdit?.name || '');
    const [amount, setAmount] = useState(transactionToEdit?.amount.toString() || '');
    const [date, setDate] = useState(transactionToEdit?.date || '');
    const [type, setType] = useState(transactionToEdit?.type || '');
    const [category, setCategory] = useState(transactionToEdit?.category || '');
    const [paymentMethod, setPaymentMethod] = useState(transactionToEdit?.paymentMethod || '');
    const [status, setStatus] = useState(transactionToEdit?.status || '');

    const handleSubmit = () => {
        if (isEditing) {
            dispatch(updateTransaction({
                id: transactionToEdit.id,
                updatedData: { name, amount: parseFloat(amount), date, type, category, paymentMethod, status }
            }));
        } else {
            dispatch(addTransaction({
                name, amount: parseFloat(amount), date, type, category, paymentMethod, status, id: uuid()
            }));
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput value={name} onChangeText={setName} placeholder="Transaction Name" style={styles.input} />
            <TextInput value={amount} onChangeText={setAmount} placeholder="Amount" keyboardType="numeric" style={styles.input} />
            <TextInput value={date} onChangeText={setDate} placeholder="Date (YYYY-MM-DD)" style={styles.input} />
            <TextInput value={type} onChangeText={setType} placeholder="Type (Income/Expense)" style={styles.input} />
            <TextInput value={category} onChangeText={setCategory} placeholder="Category" style={styles.input} />
            <TextInput value={paymentMethod} onChangeText={setPaymentMethod} placeholder="Payment Method" style={styles.input} />
            <TextInput value={status} onChangeText={setStatus} placeholder="Status" style={styles.input} />
            <Button title={isEditing ? 'Update Transaction' : 'Add Transaction'} onPress={handleSubmit} />
        </View>
    );
};

export default AddEditTransactionScreen;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, Alert, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { removeTransaction } from '../../redux/transactionSlice';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

const Transaction = ({ transaction }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePress = () => {
        navigation.navigate('TransactionDetail', { transaction });
    };

    const handleDelete = () => {
        setIsModalVisible(true);
    };

    const confirmDelete = () => {
        dispatch(removeTransaction(transaction.id));
        setIsModalVisible(false);
    };

    const cancelDelete = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <TouchableOpacity onPress={handlePress} style={styles.transactionContainer}>
                <View>
                    <Text style={styles.transactionName}>{transaction.name}</Text>
                    <Text style={styles.text}>{`Amount: $${transaction.amount.toFixed(2)}`}</Text>
                    <Text style={styles.text}>{`Date: ${transaction.date}`}</Text>
                </View>
                <Ionicons name="trash-bin" size={30} color="#FF4136" onPress={handleDelete} />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={cancelDelete}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Are you sure you want to delete this transaction?</Text>
                        <View style={styles.modalActions}>
                            <Button title="Cancel" onPress={cancelDelete} />
                            <Button title="Delete" onPress={confirmDelete} color="#FF4136" />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default Transaction;

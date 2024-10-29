import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Text, Modal } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/transactionSlice';
import Transaction from '../../components/transaction/Transaction';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

const TransactionsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const transactions = useSelector(state => state.transactions.transactions);
    const filters = useSelector(state => state.transactions.filters);

    const [searchQuery, setSearchQuery] = useState(filters.searchQuery);
    const [category, setCategory] = useState(filters.category);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const categories = Array.from(new Set(transactions.map(t => t.category)));

    const filteredTransactions = transactions.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (category === '' || t.category === category)
    );

    const selectCategory = (selectedCategory) => {
        setCategory(selectedCategory);
        dispatch(setFilter({ category: selectedCategory }));
        setIsModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search Transactions"
                value={searchQuery}
                onChangeText={(query) => {
                    setSearchQuery(query);
                    dispatch(setFilter({ searchQuery: query }));
                }}
                style={styles.input}
                placeholderTextColor="#888"
            />

            <TouchableOpacity style={styles.dropdownButton} onPress={() => setIsModalVisible(true)}>
                <Text style={styles.dropdownText}>{category || 'Select Category'}</Text>
                <Ionicons name="chevron-down-outline" size={20} color="#fff" />
            </TouchableOpacity>

            <Modal visible={isModalVisible} transparent={true}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={() => selectCategory('')} style={styles.modalItem}>
                        <Text style={styles.modalText}>All</Text>
                    </TouchableOpacity>
                    {categories.map((cat, index) => (
                        <TouchableOpacity key={index} onPress={() => selectCategory(cat)} style={styles.modalItem}>
                            <Text style={styles.modalText}>{cat}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Modal>

            <FlatList
                data={filteredTransactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Transaction transaction={item} />}
            />

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddEditTransaction')}
            >
                <Ionicons name="add-circle" size={50} color="#FFD700" />
            </TouchableOpacity>
        </View>
    );
};

export default TransactionsScreen;

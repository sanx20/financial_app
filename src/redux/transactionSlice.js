import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        transactions: [
            {
                id: uuid(),
                name: 'Groceries',
                amount: 50,
                date: '2024-10-29',
                type: 'Expense',
                category: 'Food',
                paymentMethod: 'Credit Card',
                status: 'Completed',
            },
            {
                id: uuid(),
                name: 'Salary',
                amount: 1200,
                date: '2024-10-01',
                type: 'Income',
                category: 'Job',
                paymentMethod: 'Bank Transfer',
                status: 'Completed',
            },
            {
                id: uuid(),
                name: 'Gym Membership',
                amount: 100,
                date: '2024-10-05',
                type: 'Expense',
                category: 'Fitness',
                paymentMethod: 'Credit Card',
                status: 'Pending',
            },
            {
                id: uuid(),
                name: 'Electric Bill',
                amount: 75,
                date: '2024-10-10',
                type: 'Expense',
                category: 'Utilities',
                paymentMethod: 'Debit Card',
                status: 'Completed',
            },
            {
                id: uuid(),
                name: 'Freelance Work',
                amount: 800,
                date: '2024-10-15',
                type: 'Income',
                category: 'Freelance',
                paymentMethod: 'PayPal',
                status: 'Pending',
            },
        ],
        filters: {
            category: '',
            dateRange: { start: '', end: '' },
            searchQuery: '',
        },
    },
    reducers: {
        addTransaction: (state, action) => {
            state.transactions.push({ ...action.payload, id: uuid() });
        },
        updateTransaction: (state, action) => {
            const { id, updatedData } = action.payload;
            const index = state.transactions.findIndex((t) => t.id === id);
            if (index !== -1) {
                state.transactions[index] = { ...state.transactions[index], ...updatedData };
            }
        },
        removeTransaction: (state, action) => {
            state.transactions = state.transactions.filter((t) => t.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
    },
});

export const { addTransaction, updateTransaction, removeTransaction, setFilter } = transactionsSlice.actions;
export default transactionsSlice.reducer;

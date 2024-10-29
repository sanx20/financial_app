import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: [
        {
            id: uuid(),
            name: 'Groceries',
            amount: 50,
            date: '2024-10-29',
            type: 'Expense',
            paymentMethod: 'Credit Card',
            status: 'Completed',
        },
        {
            id: uuid(),
            name: 'Rent',
            amount: 1200,
            date: '2024-10-01',
            type: 'Expense',
            paymentMethod: 'Bank Transfer',
            status: 'Completed',
        },
        {
            id: uuid(),
            name: 'Freelance Payment',
            amount: 500,
            date: '2024-10-20',
            type: 'Income',
            paymentMethod: 'PayPal',
            status: 'Pending',
        },
    ],
    reducers: {
        addTransaction: (state, action) => {
            state.push({ ...action.payload, id: uuid() });
        },
        removeTransaction: (state, action) => {
            return state.filter((transaction) => transaction.id !== action.payload);
        },
    },
});

export const { addTransaction, removeTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;

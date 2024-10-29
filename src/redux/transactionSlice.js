import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: [
        { id: '1', name: 'Groceries', amount: 50, date: '2024-10-29' },
        { id: '2', name: 'Rent', amount: 1200, date: '2024-10-01' },
        { id: '3', name: 'Utilities', amount: 100, date: '2024-10-15' },
    ],
    reducers: {
        addTransaction: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;

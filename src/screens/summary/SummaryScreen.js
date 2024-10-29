import React from 'react';
import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { PieChart } from 'react-native-chart-kit';
import styles from './style';

const SummaryScreen = () => {
    const transactions = useSelector(state => state.transactions.transactions);

    const totalExpenses = transactions.filter(t => t.type === 'Expense').reduce((sum, t) => sum + t.amount, 0);
    const totalIncome = transactions.filter(t => t.type === 'Income').reduce((sum, t) => sum + t.amount, 0);

    const pieData = [
        { name: 'Income', amount: totalIncome, color: '#00FF00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Expenses', amount: totalExpenses, color: '#FF0000', legendFontColor: '#7F7F7F', legendFontSize: 15 }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Financial Summary</Text>
            <PieChart
                data={pieData}
                width={Dimensions.get('window').width - 50}
                height={220}
                chartConfig={{
                    backgroundColor: '#1E1E1E',
                    backgroundGradientFrom: '#1E1E1E',
                    backgroundGradientTo: '#1E1E1E',
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor="amount"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
        </SafeAreaView>
    );
};

export default SummaryScreen;

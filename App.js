import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TransactionsScreen from './src/screens/transactions/TransactionsScreen';
import TransactionDetailScreen from './src/screens/transaction_detail/TransactionDetailScreen';
import SummaryScreen from './src/screens/summary/SummaryScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const TransactionsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{ title: 'Transaction List' }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen}
        options={{ title: 'Transaction Detail' }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transactions" component={TransactionsStack} />
          <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

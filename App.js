import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import TransactionsScreen from './src/screens/transactions/TransactionsScreen';
import SummaryScreen from './src/screens/summary/SummaryScreen';
import AddEditTransactionScreen from './src/screens/add_edit_transaction/AddEditTransactionScreen';
import TransactionDetailScreen from './src/screens/transaction_detail/TransactionDetailScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TransactionsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#121212' },
      headerTintColor: '#FFD700',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen name="TransactionsList" component={TransactionsScreen} options={{ title: 'Transactions' }} />
    <Stack.Screen name="AddEditTransaction" component={AddEditTransactionScreen} options={{ title: 'Add / Edit Transaction' }} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Detail' }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Transactions"
            component={TransactionsStack}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />,
            }}
          />
          <Tab.Screen
            name="Summary"
            component={SummaryScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="pie-chart" size={size} color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

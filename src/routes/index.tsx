import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AllTransactions from '../screens/AllTransactions';
import Expenditure from '../screens/Expenditure';
import Revenue from '../screens/Revenue';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Todas Trasações" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Despesas" component={Expenditure} />
        <Tab.Screen name="Todas Trasações" component={AllTransactions} />
        <Tab.Screen name="Receitas" component={Revenue} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  FontAwesome,
  Foundation,
  MaterialCommunityIcons
} from '@expo/vector-icons';

import { useCallback } from 'react';
import { AllTransactions } from '../screens/AllTransactions';
import Expenditure from '../screens/Expenditure';
import Revenue from '../screens/Revenue';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  const iconMinus = useCallback(
    (color: string) => (
      <Foundation name="minus-circle" size={30} color={color} />
    ),
    []
  );

  const iconList = useCallback(
    (color: string) => <FontAwesome name="list-ul" size={24} color={color} />,
    []
  );

  const iconPlus = useCallback(
    (color: string) => (
      <MaterialCommunityIcons
        name="plus-circle-outline"
        size={27}
        color={color}
      />
    ),
    []
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Todas Trasações"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#666DC3',
          tabBarInactiveTintColor: '#BABABA',
          tabBarStyle: {
            backgroundColor: 'white',
            borderRadius: 8,
            position: 'absolute',
            paddingTop: 7,
            paddingBottom: 7,
            height: 60
          }
        }}
      >
        <Tab.Screen
          name="Despesas"
          component={Expenditure}
          options={{
            tabBarIcon: ({ color }) => iconMinus(color)
          }}
        />
        <Tab.Screen
          name="Todas Trasações"
          component={AllTransactions}
          options={{
            tabBarIcon: ({ color }) => iconList(color)
          }}
        />
        <Tab.Screen
          name="Receitas"
          component={Revenue}
          options={{
            tabBarIcon: ({ color }) => iconPlus(color)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

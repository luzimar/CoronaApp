import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '~/pages/Main';
import Details from '~/pages/Details';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#00A878',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;

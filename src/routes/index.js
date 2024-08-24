import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Sec from '../screens/Sec';
import Tri from '../screens/Tri';
import Bkl from '../screens/Bkl';
import Astral from '../screens/Astral';
import Whs from '../screens/Whs';
import Handicap from '../screens/Handicap';
import Work from '../screens/Work';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tri"
          component={Tri}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Sec" component={Sec} />
        <Stack.Screen
          name="Bkl"
          component={Bkl}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Astral" component={Astral} />
        <Stack.Screen
          name="Whs"
          component={Whs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Handicap"
          component={Handicap}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Work"
          component={Work}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

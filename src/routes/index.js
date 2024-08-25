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
import Splash from '../screens/auth/Splash';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Email_Verify from '../screens/auth/Email_Verify';
import Otp from '../screens/auth/Otp';
import Change_Pas from '../screens/auth/Change_Pas';
import Previous_Match from '../screens/Previous_Match';
import Match_Detail from '../screens/Match_Detail';
import Start from '../screens/Admin/Start';
import User from '../screens/Admin/User';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
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
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Email_Verify"
          component={Email_Verify}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Change_Pas"
          component={Change_Pas}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Previous_Match"
          component={Previous_Match}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Match_Detail"
          component={Match_Detail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

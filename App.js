import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/scenes/Home/HomeScreen';
import SelectProofOfAddress from './src/scenes/SelectProofOfAddress/SelectProofOfAddress';
import EditAddress from './src/scenes/EditAddress/EditAddress';
import MobileOperatorLogin from './src/scenes/MobileOperatorLogin/MobileOperatorLogin';
import CustomerLogin from './src/scenes/CustomerLogin/CustomerLogin';

const styles = StyleSheet.create({
  container: {
    paddingTop: 42
  },
});

const Stack = createStackNavigator();

const App = () => {
  console.log('App Executed')
  const [isMOSignedIn, setMOSignIn] = useState(true)
  const [isCustomerSignedIn, setCustomerSignIn] = useState(true)
  return (
    <NavigationContainer>
      {isMOSignedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerLargeTitle: true }}
            name="Customer Login"
            component={CustomerLogin}
          />
          <Stack.Screen
            options={{ headerLargeTitle: true }}
            name="Home"
            component={HomeScreen}
          />

          <Stack.Screen
            options={{ headerLargeTitle: true }}
            name="Update Address"
            component={SelectProofOfAddress}
          />
          <Stack.Screen
            options={{ headerLargeTitle: true }}
            name="Edit Address"
            component={EditAddress}
          />

        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Mobile Operator Login"
            component={MobileOperatorLogin} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
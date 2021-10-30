import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/Store';
import { useDispatch, useSelector } from 'react-redux';

import HomeScreen from './src/scenes/Home/HomeScreen';
import SelectProofOfAddress from './src/scenes/SelectProofOfAddress/SelectProofOfAddress';
import EditAddress from './src/scenes/EditAddress/EditAddress';
import MobileOperatorLogin from './src/scenes/MobileOperatorLogin/MobileOperatorLogin';
import CustomerLogin from './src/scenes/CustomerLogin/CustomerLogin';
import EditImage from './src/scenes/EditImage/EditImage';

const styles = StyleSheet.create({
  container: {
    paddingTop: 42
  },
});

const Stack = createStackNavigator();

const App = () => {
  console.log('App Executed')

  const [isMOSignedIn, setMOSignIn] = useState(true)
  // const [isCustomerSignedIn, setCustomerSignIn] = useState(true)

  // const isMOSignedIn = navigation.state.params.isLoggedIn

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isMOSignedIn ? (
          <Stack.Navigator>
            {/* <Stack.Screen
            options={{ headerLargeTitle: true }}
            name="Customer Login"
            component={CustomerLogin}
          /> */}
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
            <Stack.Screen
              options={{ headerLargeTitle: true }}
              name="Edit Image"
              component={EditImage}
            />

          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Mobile Operator Login"
              component={MobileOperatorLogin}
              initialParams={isMOSignedIn} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
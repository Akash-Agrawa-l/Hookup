import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import walkthrough from '@hookup/modules/onboarding/screens/walkthrough';

const RootStack = createNativeStackNavigator();

const RootRouter = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="WalkThrough" component={walkthrough} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;

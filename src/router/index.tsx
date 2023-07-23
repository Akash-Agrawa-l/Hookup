import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const RootStack = createNativeStackNavigator();

const RootRouter = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {/* <RootStack.Screen name='' component={} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(RootRouter);

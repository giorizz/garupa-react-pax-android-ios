import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StatusBar} from 'react-native';

import StackRoutes from './stack.routes';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#00a586" />
      <View style={{flex: 1}}>
        <StackRoutes />
      </View>
    </NavigationContainer>
  );
};

export default Routes;

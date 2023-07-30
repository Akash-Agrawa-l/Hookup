import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '@hookup/utils/theme';

const Walkthrough = () => {
  return (
    <View style={styles.parentContainer}>
      <Text style={{color: theme.BLACK}}>Walkthrough</Text>
    </View>
  );
};

export default React.memo(Walkthrough);

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

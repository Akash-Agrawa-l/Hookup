import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Walkthrough = () => {
  return (
    <View style={styles.parentContainer}>
      <Text style={{color: '#000'}}>Walkthrough</Text>
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

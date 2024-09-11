import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.PRIMARY,
  },
});
export default HomeScreen;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../theme/colors';

export default function TrendyolGo() {
  return (
    <View style={styles.container}>
      <Text>TrendyolGo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.WHITE,
  },
});

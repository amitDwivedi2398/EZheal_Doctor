import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { scaleHeight, scaleWidth } from '@ultis/size';

const DashBoard = memo(() => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: scaleWidth(20),
              width: scaleWidth(180),
              margin: scaleWidth(5),
            }}>
            <TouchableOpacity style={styles.counter}>
              <Text>Cars</Text>
              <Text>234</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
});
export default DashBoard;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  counter: {
    backgroundColor: colors.red,
    height: scaleHeight(150),
  },
});

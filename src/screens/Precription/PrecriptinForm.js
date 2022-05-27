//import liraries
import ButtonPrimary from '@components/ButtonPrimary';
import DropInput from '@components/DropInput';
import { scaleHeight, scaleWidth } from '@ultis/size';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

// create a component
const PrecriptinForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <DropInput title="User Name" />
        <ButtonPrimary
          title={'Precriptin Uplode'}
          style={styles.buttonPrimary}
        />
        <ButtonPrimary title={'Uplode'} style={styles.buttonPrimary} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimary: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleWidth(20),
  },
});

//make this component available to the app
export default PrecriptinForm;

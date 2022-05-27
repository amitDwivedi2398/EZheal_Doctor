import { scaleHeight, scaleWidth } from '@ultis/size';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';
import FONTS from '@ultis/fonts/index';
export default function Report() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity>
        <View style={styles.MainSection}>
          <View
            style={{
              backgroundColor: 'white',
              shadowColor: 'black',
              shadowOpacity: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              style={styles.img}
              source={require('../../assets/Report/img-report.png')}
            />
            <View style={styles.txtSection}>
              <Text style={styles.txtSty}>Docter</Text>
              <Text style={styles.txtSty}>4/13/2022</Text>
              <Text style={styles.txtSty}>title</Text>
            </View>
          </View>
        </View>
        <View style={styles.MainSection}>
          <View
            style={{
              backgroundColor: 'white',
              shadowColor: 'black',
              shadowOpacity: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              style={styles.img}
              source={require('../../assets/Report/img-report.png')}
            />
            <View style={styles.txtSection}>
              <Text style={styles.txtSty}>Docter</Text>
              <Text style={styles.txtSty}>4/13/2022</Text>
              <Text style={styles.txtSty}>title</Text>
            </View>
          </View>
        </View>
        <View style={styles.MainSection}>
          <View
            style={{
              backgroundColor: 'white',
              shadowColor: 'black',
              shadowOpacity: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              style={styles.img}
              source={require('../../assets/Report/img-report.png')}
            />
            <View style={styles.txtSection}>
              <Text style={styles.txtSty}>Docter</Text>
              <Text style={styles.txtSty}>4/13/2022</Text>
              <Text style={styles.txtSty}>title</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: scaleWidth(200),
    height: scaleHeight(150),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  MainSection: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: scaleWidth(10),
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#4F6DE6',
    width: scaleWidth(350),
  },
  txtSection: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 10,
    alignItems: 'center',
  },
  txtSty: {
    fontFamily: FONTS.HIND.Bold,
  },
});

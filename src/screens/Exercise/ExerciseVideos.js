import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

export default function ExerciseVideos() {
  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/-ZZPOXn6_9w' }}
        />
        <View style={styles.txtTitle}>
          <Text>Doctor</Text>
          <Text>Exercise Type</Text>
        </View>
      </View>

      <View style={styles.flex1}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/-ZZPOXn6_9w' }}
        />
        <View style={styles.txtTitle}>
          <Text>Doctor</Text>
          <Text>Exercise Type</Text>
        </View>
      </View>
      <View style={styles.flex1}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
    marginTop: 10,
    width: 350,
    height: 50,
  },
  txtTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

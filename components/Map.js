import React from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import mapStyle from '../styles/styles'

export default function Map() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} customMapStyle={mapStyle} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
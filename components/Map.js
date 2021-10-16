import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView from 'react-native-maps';

import mapStyle from '../styles/styles'

export default function Map({setlat,setlng}) {

    return (
      <View style={styles.container}>
        <MapView
         style={styles.map}
         customMapStyle={mapStyle}
         onPress={(e) => {
          setlat(e.nativeEvent.coordinate.latitude)
          setlng(e.nativeEvent.coordinate.longitude)
          }}
  
         />
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
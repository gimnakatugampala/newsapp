import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView from 'react-native-maps';
import { getName } from '../api/api';

import mapStyle from '../styles/styles'

export default function Map() {

  const [lat, setlat] = useState('')
  const [lng, setlng] = useState('')

  

    return (
      <View style={styles.container}>
        <MapView
         style={styles.map}
         customMapStyle={mapStyle}
         onPress={(e) => {
          setlat(e.nativeEvent.coordinate.latitude)
          setlng(e.nativeEvent.coordinate.longitude)

            
          console.log(lat)
          console.log(lng)



          getName(lat,lng)
          .then(data => console.log(data))
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
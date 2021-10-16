import  React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Map from './components/Map';

import { getName } from './api/api';

export default function App() {

  const [lat, setlat] = useState('')
  const [lng, setlng] = useState('')

  // // Get Country Name
  // getName(lat,lng)
  // .then(data => console.log(data))

  console.log(lat)
  console.log(lng)

  return (
    <>
    <StatusBar style="light" />
    <Map setlat={setlat} setlng={setlng}  />
    </>
  );
}

const styles = StyleSheet.create({});

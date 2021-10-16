import  React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Map from './components/Map';



export default function App() {


  const [getcountry, setgetcountry] = useState('')

  
  // if(lat !== null || lng !== null){
  //   // Get Country Name
  //   getName(lat,lng)
  //   .then(data => console.log(data.results[0].country))


  // }

  return (
    <>
    <StatusBar style="light" />
    <Map   />
    </>
  );
}

const styles = StyleSheet.create({});

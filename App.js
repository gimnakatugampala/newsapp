import  React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Map from './components/Map';
import News from './components/News';

// import { getName } from './api/api'


export default function App() {


  const [getcountry, setgetcountry] = useState('')
  const [modal, setmodal] = useState(false)


  return (
    <>
    <StatusBar style="light" />
    <News setmodal={setmodal} modal={modal} getcountry={getcountry} />
    <Map  setmodal={setmodal} setgetcountry={setgetcountry} />
    </>
  );
}

const styles = StyleSheet.create({});

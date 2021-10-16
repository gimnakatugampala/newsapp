import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Map from './components/Map';

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <Map />
    </>
  );
}

const styles = StyleSheet.create({});

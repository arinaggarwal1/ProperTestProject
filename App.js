// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import 'react-native-gesture-handler';
import {
  StyleSheet,

} from "react-native";


import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen"

export default function App() {

  return (
    <MessagesScreen></MessagesScreen>

  );

}

const styles = StyleSheet.create({
  textThingy: {
    marginHorizontal: 20
  }
});

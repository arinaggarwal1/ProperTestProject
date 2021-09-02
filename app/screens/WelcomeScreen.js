import React from 'react';


import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    Button,
    Alert,
    StatusBarPropsAndroid,
    Platform,
    StatusBar,
    Dimensions,
    ImageBackground,
    
  
  } from "react-native";
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground style = {styles.background}
            source = {require("../assets/background.jpg")}
        >
            <View style = {styles.logoContainer}>
                <Image style = {styles.logo} source = {require("../assets/logo-red.png")}></Image>
                <Text style = {styles.tagLine}>Sell what you don't need!</Text>
            </View>

            <View style = {styles.buttonContainer}>
                <AppButton title = "Login"></AppButton>
                <AppButton title = "Register" color = "secondary"/>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center"
    },

    loginButton: {
        width: "100%",
        height: 70, 
        backgroundColor: "#fc5c65"
    },

    registerButton: {
        width: "100%",
        height: 70, 
        backgroundColor: "#4ecdc4"
    },

    logo: {
        width:100, 
        height: 100,
        marginBottom: 20
        
        // alignSelf: "center"
    },

    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },

    buttonContainer: {
        padding: 20,
        width: "100%",
        // backgroundColor: "orange"
    },

    tagLine: {
        fontSize: 25,
        fontWeight: "bold" 
    }
})

export default WelcomeScreen;
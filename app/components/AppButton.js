import React from "react";

import {View, StyleSheet, Text, TouchableOpacity, TouchablHighlight, TouchableNaetiveFeedback,button, TouchableNativeFeedback} from "react-native";

import colors from "../config/colors";


function AppButton({title, onPress, color = "primary", style}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]},style]} onPress={onPress} activeOpacity = {0.6}>
           <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: { 
        borderRadius: 25, 
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 5
    },

    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})

export default AppButton;
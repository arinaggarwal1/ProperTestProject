import React from 'react';
import { View, StyleSheet, Text, color} from 'react-native';
import colors from '../config/colors';

import {MaterialCommunityIcons} from "@expo/vector-icons";


function Tabs({title, color, icon, topSpace}) {
    return (
        <View style = {[{marginTop: topSpace},styles.container]} >
            <View style = {[{backgroundColor: color}, styles.icon]}>
                <MaterialCommunityIcons name = {icon} size = {20}/>
            </View>
            <Text style = {styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderTopWidth: 1,
        borderBottomWidth: 1, 
        borderColor: "#e8e8e8",
        alignItems: "center"
    },

    icon: {
        height: 40,
        width: 40,
        marginRight: 15,
        // backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },

    text: {
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default Tabs;
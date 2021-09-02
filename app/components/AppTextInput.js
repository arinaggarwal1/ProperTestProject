import React from 'react';
import { TextInput, View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from '../config/colors';
import defaulyStyles from "../config/styles";

function AppTextInput({icon, style, ...otherProps}) {
    return (
        <View style = {[styles.container, style]}>
            {icon && <MaterialCommunityIcons name = {icon} size = {20} color = {colors.medium} style = {styles.icon}/>}
            <TextInput placeholderTextColor = {colors.medium} style = {defaulyStyles.text} underlineColorAndroid={'rgba(0,0,0,0)'} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mediumLight,
        borderRadius: 10,
        flexDirection: "row",
        // width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },


    icon: {
        marginRight: 10
    }
})

export default AppTextInput;
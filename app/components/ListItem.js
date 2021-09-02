import React from 'react';

import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import App from '../../App';
import colors from '../config/colors';
import AppText from './AppText';
import { Swipeable } from "react-native-gesture-handler";
import {MaterialCommunityIcons} from "@expo/vector-icons"
function ListItem({title, subTitle, image, onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions = {renderRightActions} >
            <TouchableOpacity underlayColor = {colors.light} onPress = {onPress}>
                <View style = {styles.mainContainer}>
                    <Image style = {styles.image} source = {image}/>
                    <View style = {styles.detailsContainer}>
                        <AppText style = {styles.title}>{title}</AppText>
                        <AppText style = {styles.subTitle}>{subTitle}</AppText>
                    </View>

                    <MaterialCommunityIcons color = {colors.medium} name = "chevron-right" size = {25} style = {styles.icon} ></MaterialCommunityIcons>
                </View>
            </TouchableOpacity>
        </Swipeable>
        
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70, 
        height: 70, 
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "bold"
    },

    subTitle: {
        color: colors.medium
    },

    detailsContainer: {
        flex:1
    },
    icon: {
        alignSelf: "center"
    }
})

export default ListItem;
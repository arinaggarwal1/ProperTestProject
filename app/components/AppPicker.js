import React, { Children } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, Platform, FlatList, Picker} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from '../config/colors';
import defaultStyles from "../config/styles";
import AppText from './AppText';
import { useState } from 'react';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({icon, style ,placeholder, items, onSelectItem, selectedItem}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
    <React.Fragment>
        <TouchableWithoutFeedback onPress ={() => setModalVisible(true)}>
            <View style = {[style, styles.container]}>
                {icon && <MaterialCommunityIcons name = {icon} size = {20} color = {colors.medium} style = {styles.icon}/>}

                {selectedItem 
                    ? <AppText style = {styles.text}>{selectedItem.label}</AppText>
                    : <AppText style = {styles.placeholder}>{placeholder}</AppText>
                }
                
                <MaterialCommunityIcons name = "chevron-down" size = {20} color = {colors.medium} />

            </View>
        </TouchableWithoutFeedback>
        <Modal visible = {modalVisible} animationType = "slide">
            <View style = {styles.modalContainer}>
                <Button title = "Close" onPress = {() => setModalVisible(false)}></Button>
                <FlatList 
                    data = {items}
                    keyExtractor = {(item) => item.value.toString()}
                    renderItem = {({item}) => (
                        <PickerItem 
                            label = {item.label}
                            onPress = {() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />
                
                    )}
                
                />
                        
                    
                
                
            </View>

        </Modal>
    </React.Fragment>   
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
    },

    text: {
        flex: 1
    },

    placeholder: {
        color: defaultStyles.colors.medium
    },

    modalContainer: {
        marginTop: Platform.OS === "android" ? 0 : 44
    }
})

export default AppPicker;
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Tabs from '../components/Tabs';
import colors from '../config/colors';
import Screen from '../components/Screen';



function MyAccountScreen(props) {
    return (
        <Screen>
            <View style = {styles.container}>

                <ListItem
                    title = "Mosh Hamedani"
                    subTitle = "programmingwithmosh@gmail.com"
                    image = {require("../assets/mosh.jpg")}
                />

            </View>

            <Tabs title = "My Listings" color = {colors.primary} icon= "format-list-bulleted" topSpace = {40}/>
            <Tabs title = "My Messages" color = {colors.secondary} icon= "email" topSpace = {0}/>
            <Tabs title = "Log Out" color = {colors.yellow1} icon= "logout" topSpace = {20}/>
          

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderBottomWidth: 1, 
        borderColor: "#e8e8e8",
       
    }
})

export default MyAccountScreen;
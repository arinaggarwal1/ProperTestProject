import React, {useState} from 'react';

import {View, StyleSheet, FlatList } from 'react-native';
import Screen from "../components/Screen";
import ListItem from '../components/ListItem';
import colors from '../config/colors';

import ListItemSeperator from "../components/ListItemSeperator";
import { Swipeable } from "react-native-gesture-handler";
import ListItemDeleteAction from '../components/ListItemDeleteAction';


// console.log(Constants);

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg")
    }, 
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/favicon.png")
    }, 
]
function MessagesScreen(props) {
    const [messages,setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)
    
    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages);
    }

    return (
        <Screen style = {styles.screen}>
            <FlatList
                data = {messages}
                keyExtractor={message => message.id.toString()}
                renderItem= {({item}) => (
                    <ListItem
                        title = {item.title}
                        subTitle = {item.description}
                        image =  {item.image}
                        onPress = {() => console.log("Message selected", item)}
                        renderRightActions = {() => 
                            <ListItemDeleteAction onPress = {() => handleDelete(item)}/>}
                        />
                )}
                ItemSeparatorComponent = {ListItemSeperator}
                refreshing = {refreshing}
                onRefresh = {() =>{
                    // setMessages([
                    //     {
                    //         id: 2,
                    //         title: "T2",
                    //         description: "D2",
                    //         image: require("../assets/mosh.jpg")
                    //     }
                    // ])
                } }
            />

        </Screen>
    );
}

const styles = StyleSheet.create({
    
        
    
})

export default MessagesScreen;
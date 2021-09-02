import React from 'react';
import { StyleSheet } from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import * as Yup from "yup"
import AppPicker from '../components/AppPicker';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).matches().label("Password")
})

function RegisterScreen(props) {
    return (
        <Screen style = {styles.container}>
            <AppForm
                initialValues = {{name: "", email: "", password: ""}}
                onSubmit = {values => console.log(values)}
                validationSchema = {validationSchema}
            >
                <AppFormField
                    autoCapitalize = "words"
                    autoCorrect = {false}
                    icon = "account"
                    keyboardType = "default"
                    name = "name"
                    placeholder = "Name"
                    textContentType = "name"
                    style = {{borderRadius:40}}
                ></AppFormField>
                
                <AppFormField
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    icon = "email"
                    keyboardType = "email-address"
                    name = "email"
                    placeholder = "Email"
                    textContentType = "emailAddress"
                    style = {{borderRadius:40}}
                ></AppFormField>
                
                <AppFormField
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    icon = "lock"
                    keyboardType = "default"
                    name = "password"
                    placeholder = "Password"
                    textContentType = "newPassword"
                    secureTextEntry = {true}
                    style = {{borderRadius:40}}
                ></AppFormField>

                <SubmitButton
                    title = "login"
                    color = "primary"
                    style = {{borderRadius: 40,marginTop:10}}
                    
                />

                


            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default RegisterScreen;
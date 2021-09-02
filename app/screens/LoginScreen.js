import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).matches().max(12).label("Password")
})

function LoginScreen(props) {
    return (
        <Screen style={{ padding: 10 }}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />

            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}

            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name = "email"
                    placeholder="Email"
                    // style = {{marginHorizontal: 15}}
                    textContentType="emailAddress"

                />

                <AppFormField
                    icon="lock"
                    placeholder="Password"
                    name = "password"
                    // style = {{marginHorizontal: 15}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}

                />


                <SubmitButton
                    title="Login"
                />
                

            </AppForm>


        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignSelf: "center",
        marginVertical: 30

    },

    container: {
        padding: 100,
    }
})

export default LoginScreen;
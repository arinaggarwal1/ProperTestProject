import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import { Formik } from 'formik';
import{useFormikContext} from "formik";


function AppFormField({name, style, ...otherProps}) {
    const{setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <AppTextInput
                // autoCapitalize="none"
                // autoCorrect={false}
                // icon="email"
                // keyboardType="email-address"
                onBlur = {() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                style = {style}
                {...otherProps}
                // placeholder="Email"
                // style = {{marginHorizontal: 15}}
                // textContentType="emailAddress"

            />
            
            <ErrorMessage error = {errors[name]} touched = {touched[name]}></ErrorMessage>
        </>
    );
}

export default AppFormField;
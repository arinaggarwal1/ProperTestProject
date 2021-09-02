import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import {  } from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import AppFormPicker from '../components/forms/AppFormPicker';
import AppPicker from '../components/AppPicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().max(55).label("Title"),
    price: Yup.number().required().min(5.00).max(999999.99).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
});

const categories = [
    {label: "Furniture", value: 1},
    {label: "Clothing", value: 2},
    {label: "Camera", value: 3},
];

function ListingEditScreen(props) {
    const [category, setCategory] = useState();
    

    return (
        <Screen style = {{padding: 10}}>
            <AppForm
                initialValues = {{
                    title: "",
                    price: "",
                    category: null,
                    description: ""
                }}
                onSubmit = {(values) => console.log(values)}
                validationSchema = {validationSchema}
            >
                <AppFormField
                    autoCapitalize = "words"
                    autoCorrect = {true}
                    keyboardType = "default"
                    name = "title"
                    placeholder = "Title"
                ></AppFormField>

                <AppFormField
                    autoCorrect = {false}
                    keyboardType = "numeric"
                    name = "price"
                    placeholder = "Price"
                ></AppFormField>

                <AppFormPicker
                    items = {categories}
                    name = "category"
                    placeholder = "Category"
                ></AppFormPicker>

              

                <AppFormField
                    autoCapitalize = "sentences"
                    autoCorrect = {true}
                    keyboardType = "default"
                    name = "description"
                    placeholder = "Description"
                    maxLength = {255}
                    multiline
                    numberOfLines = {3}
                ></AppFormField>

                <SubmitButton 
                    title = "Submit"
                    style = {{borderRadius: 10}}    
                ></SubmitButton>

            </AppForm>
            

            
        </Screen>
    );
}

export default ListingEditScreen;
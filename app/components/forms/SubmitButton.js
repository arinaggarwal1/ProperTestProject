import React from 'react';
import AppButton from '../AppButton';
import {useFormikContext} from "formik";

function SubmitButton({title, color, style}) {
    const {handleSubmit} = useFormikContext();

    return (
        <AppButton color = {color} style = {style}
            title= {title}
            onPress={(handleSubmit)}
        />
    );
}

export default SubmitButton;
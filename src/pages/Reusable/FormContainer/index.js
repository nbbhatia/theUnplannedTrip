
import React from 'react';
import QueryForm from "../QueryForm";
import { Grid, Typography } from '@mui/material'
const Form = () => {
    let BookingFormValues = [
        { name: "Name", type: "text" },
        { name: "Email", type: "email" },
        { name: "PhoneNo.", type: "number" },
        { name: "BookingDate", type: "date" },
        { name: "Messages", type: "textArea" }
    ]
    let QueryFormValues = [
        { name: "Name", type: "text" },
        { name: "Email", type: "email" },
        { name: "PhoneNo.", type: "number" },
        { name: "Messages", type: "textArea" }
    ]
    return (
        <Grid md={12} xs={12} sm={12} item style={{
            background: "#f4f5f8",
            padding: "45px 25px",
            

        }}>
            <Typography variant="h4" style={{ color: "#0f2454", textAlign: "center", marginBottom: 24 }}>
                Book the Tour
            </Typography>
            <QueryForm formValues={BookingFormValues} buttonText="Booking Now" />
            <Typography variant="h4" style={{ color: "#0f2454", textAlign: "center", margin: "24px 0" }}>
                OR
            </Typography>
            <Typography variant="body1" style={{ color: "#0f2454", textAlign: "center" }}>
                Fill up the form below to tell us what you're looking for
            </Typography>
            <QueryForm formValues={QueryFormValues} buttonText="Send Enquiry" />
        </Grid>
    )
}

export default Form;
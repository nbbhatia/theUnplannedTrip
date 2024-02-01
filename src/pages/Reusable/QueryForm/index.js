import { useState,useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Grid, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
// import 'bootstrap/dist/css/bootstrap.min.css';

const FormikForm = (props) => {
    const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful
    const [submitted, setSubmitted] = useState(false);
    const [value, setValues] = useState();
    const { formValues, buttonText } = props;
    const formRef=useRef();
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        onSubmit: () => {
            setMessage('Form submitted');
            setSubmitted(true);
        },
        validationSchema: yup.object({
            name: yup.string().trim().required('Name is required'),
            email: yup
                .string()
                .email('Must be a valid email')
                .required('Email is required'),
            message: yup.string().trim().required('Message is required'),
        }),
    });
    // const handleChange = (e) => {
    //     console.log(e.target.value)
    //     setValues(e.target.value)
    // }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9igm1c5', 'template_mi8cqvf', formRef.current, 'IaOknXlgPlATUlXvn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <Grid md={12} xs={12} sm={12} item container>

            <form ref={formRef} style={{ width: "100%" }} onSubmit={sendEmail}>
                {formValues?.map((formFeild, index) =>
                (
                    <div key={index} style={{ display: "block", margin: 16 }}>
                    {/* {console.log("formFeild",formFeild)} */}
                        <TextField
                            style={{ width: "100%" }}
                            name={formFeild.name}
                            variant="outlined"
                            type={formFeild.type}
                            placeholder={formFeild.name}
                            value={value}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                        {/* {formik?.errors?.formFeild?.name && (
                            <div className="text-danger">{formik.errors.name}</div>
                        )} */}
                    </div>

                ))}
                <Grid md={12} xs={12} sm={12} item container justifyContent={"center"}>
                    <Button type="submit" variant='contained' style={{ background: buttonText === "Send Enquiry" ? "#FFB300" : "#26BDF7", color: "black" }} onClick={()=>console.log("hello")}>
                        {buttonText}
                    </Button>
                </Grid>

            </form>
            <div hidden={!submitted} className="alert alert-primary" role="alert">
                {message}
            </div>

        </Grid>
    );
};

export default FormikForm;
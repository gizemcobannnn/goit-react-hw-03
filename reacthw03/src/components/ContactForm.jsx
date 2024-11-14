import {useEffect, useId} from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';


const ContactForm = () => {
    const initialValues = {
        username: "",
        phone: ""
      };
    
        const nameFieldId = useId();
        const phoneFieldId = useId();

        const FeedbackSchema =  Yup.object().shape({
            username: Yup.string()
              .required('Username is required')
              .min(3, 'Username must be at least 3 characters'),
            phone: Yup.string()
              .required('Phone number is required')
              .matches(/^[0-9]+$/, 'Phone number is not valid')
              .min(9, 'Phone number must be at least 10 digits')
          });
        const handleSubmit = (values, actions) => {
          console.log(values);
          setLocalStorage(values);
          actions.resetForm();
        };

        const setLocalStorage=(value)=>{
            localStorage.setItem("personData",JSON.stringify(value));
        }
        const getLocalStorage=()=>{
            const data=localStorage.getItem("personData");
            return data ? JSON.parse(data) : { username: "", phone: "" };

        }

        useEffect(() => {
            const storedData = getLocalStorage();
            initialValues.username = storedData.username;
            initialValues.phone = storedData.phone;
          }, []);

  return (
    <div className='contact-form'  style={{display:"flex", justifyContent:"center"}}>
           <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
            >
                <Form>
                <div style={{display:"flex",flexDirection:"column" ,justifyContent:"flex-start", alignItems:"flex-start"}}>
                    <label htmlFor={nameFieldId}>Username</label>
                    <Field type="text" name="username" id={nameFieldId} />
                    <ErrorMessage name="username" component="span" />
                </div>

                <div style={{display:"flex",flexDirection:"column" ,justifyContent:"flex-start", alignItems:"flex-start"}}>
                    <label htmlFor={phoneFieldId}>Phone</label>
                    <Field type="text" name="phone" id={phoneFieldId} /> 
                    <ErrorMessage name="phone" component="span" />
                </div>

                <button type="submit" style={{border:"2px solid grey ",marginTop:"10px"}}>Add Contact</button>
                </Form>
            </Formik>

    </div>
  )
}
export default ContactForm;
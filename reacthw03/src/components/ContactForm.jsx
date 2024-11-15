import {useEffect, useId, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import PropTypes from 'prop-types';


const ContactForm = ({onAddContact}) => {
    const [initialValues,setInitialValues]=useState({
      username: "",
      phone: ""
    });
   
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
          const newContact = {
            id: Date.now().toString(),
            name: values.username, // Doğru şekilde 'name' alanına eşleştiriyoruz
            phone: values.phone,
          };
          values= newContact;
          console.log(values);
          setLocalStorage(values);
          onAddContact(values);
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
            setInitialValues({
              username:storedData.username||"",
              phone:storedData.phone||""
            }); 
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

                <button type="submit"  style={{border:"2px solid grey ",marginTop:"10px"}}>Add Contact</button>
                </Form>
            </Formik>

    </div>
  )
}

ContactForm.propTypes={
  onAddContact:PropTypes.func.isRequired
};

export default ContactForm;
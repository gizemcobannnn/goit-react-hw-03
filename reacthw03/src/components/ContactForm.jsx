import {useId} from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';


const ContactForm = () => {
    const initialValues = {
        username: "",
        phone: ""
      };
    
        const nameFieldId = useId();
        const phoneFieldId = useId();

        const FeedbackSchema = Yup.object().shape({
            username: Yup.string().required("Username is required"),
            phone: Yup.number().required("Phone number is required")
          });
        const handleSubmit = (values, actions) => {
          console.log(values);
          actions.resetForm();
        };

        
  return (
    <div className='contact-form'>
           <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
            >
                <Form>
                <div>
                    <label htmlFor={nameFieldId}>Username</label>
                    <Field type="text" name="username" id={nameFieldId} />
                    <ErrorMessage name="username" component="span" />
                </div>

                <div>
                    <label htmlFor={phoneFieldId}>Phone</label>
                    <Field type="text" name="phone" id={phoneFieldId} /> 
                    <ErrorMessage name="phone" component="span" />
                </div>

                <button type="submit">Add Contact</button>
                </Form>
            </Formik>

    </div>
  )
}
export default ContactForm;
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = () => {
  return (
    <div className='contact-form'>
        <Formik>
            <Form>
            <p>Name</p>
            </Form>
            

        </Formik>
    </div>
  )
}

export default ContactForm
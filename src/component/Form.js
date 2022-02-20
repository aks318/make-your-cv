import { Form, Formik } from 'formik'
import React from 'react'

const InputForm = () => {
  return (
    <Formik
        initialValues={
            {
                name : ""
            }
        }
    >
        <Form>
            <input type = "text"  name='name'/>
        </Form>
    </Formik>
  )
}

export default InputForm
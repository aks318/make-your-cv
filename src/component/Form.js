import { Field, FieldArray, Form, Formik } from 'formik'
import React , {useEffect, useState} from 'react'
import * as Yup from 'yup'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Button from '@mui/material/Button';

const InputForm = () => {
    const [selectedImage , setSelectedImage] = useState(null)
    const initialValues = {
        name : "",
        number : "",
        email : "",
        skills : [""],
        certificates : [""],
        about : ""
    }

    const validationSchema = Yup.object({
        name : Yup.string().required("Name Required"),
        email : Yup.string()
                .email("Invalid Email")
                .required("Email required"),
        number : Yup.number()
                .typeError('Please Enter Valid Number')
                .required("Number Required")
                .min(1000000000, "Please Enter Valid Number")
                .max(9999999999, "Please Enter Valid Number"),
        about : Yup.string().required("You have to specify something about yourself."),
        
    })
  return (
    <Formik
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit = {(values) => console.log(values)}
    >
        {function ShowForm({values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        setFieldValue,
        handleReset,
        isValid,
        dirty,}) {
            console.log("errors" , errors)
            console.log("touched" , touched)
            return(
            <div className='form'>
                <Form>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Field name = "name">
                                {({field, form, meta}) => ( 
                                    <TextField className='inputField' {...field} id="outlined-basic" label="Name" variant="outlined" />
                                )}
                            </Field>
                            {touched.name && errors.name && <p>{errors.name}</p>}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Field name = "email">
                                {({field, form, meta}) => ( 
                                    <TextField className='inputField' {...field} id="outlined-basic" label="Email" type= "email" variant="outlined" />
                                )}
                            </Field>
                            {touched.email && errors.email && <p>{errors.email}</p>}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Field name = "number">
                                {({field, form, meta}) => ( 
                                    <TextField className='inputField' {...field} id="outlined-basic" label="Number"  variant="outlined" />
                                )}
                            </Field>
                            {touched.number && errors.number && <p>{errors.number}</p>}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <FieldArray name="skills">
                                {fieldArrayProps => {
                                    const {push , remove , form : {values : {skills}}} = fieldArrayProps
                                    return(
                                        <>
                                        {skills.map((skill , index) => 
                                            <div key={index} className = "arrayDiv">
                                                <Field name = {`skills[${index}]`}>
                                                    {({field, form, meta}) => ( 
                                                        <TextField style={{width : "90%"}}  {...field} id="outlined-basic" label="Skill" type= "text" variant="outlined" />
                                                    )}
                                                </Field>
                                                <div className='icon'>
                                                    <AddCircleOutlineRoundedIcon color='action' onClick={() => push('')} />
                                                    {index > 0 && (
                                                    <RemoveCircleOutlineRoundedIcon color='action' onClick={() => remove(index)} />
                                                    )}
                                                </div>
                                            </div>
                                            
                                        )}
                                        </>
                                    )
                                }}
                            </FieldArray>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <FieldArray name="certificates">
                                {fieldArrayProps => {
                                    const {push , remove , form : {values : {certificates}}} = fieldArrayProps
                                    return(
                                        <>
                                        {certificates.map((certificate , index) => 
                                            <div key={index} className = "arrayDiv">
                                                <Field name = {`certificates[${index}]`}>
                                                    {({field, form, meta}) => ( 
                                                        <TextField style={{width : "90%"}}  {...field} id="outlined-basic" label="Certificate" type= "text" variant="outlined" />
                                                    )}
                                                </Field>
                                                <div className='icon'>
                                                    <AddCircleOutlineRoundedIcon color='action' onClick={() => push('')} />
                                                    {index > 0 && (
                                                    <RemoveCircleOutlineRoundedIcon color='action' onClick={() => remove(index)} />
                                                    )}
                                                </div>
                                            </div>
                                            
                                        )}
                                        </>
                                    )
                                }}
                            </FieldArray>
                        </Grid>
                        <Grid item xs={12}>
                            <Field name = "about">
                                {({field, form, meta}) => ( 
                                    <TextField className='inputField' {...field} id="outlined-basic" label="About You"  variant="outlined" 
                                    multiline
                                    />
                                )}
                            </Field>
                            {touched.about && errors.about && <p>{errors.about}</p>}
                        </Grid>
                        <Grid item xs={12} className = "img-div">
                                {selectedImage && (
                                <div >
                                <img alt="not fount" width="250px" height="300px" src={URL.createObjectURL(selectedImage)} />
                                {/* <button onClick={()=>setSelectedImage(null)}>Remove</button> */}
                                </div>
                                )}
                                <input
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                type="file"
                                onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setSelectedImage(event.target.files[0]);
                                    setFieldValue("file" , event.target.files[0])
                                }}
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="outlined" color='inherit' component="span" >
                                        Upload Pic
                                    </Button>
                                </label> 
                        </Grid>
                    </Grid>
                </Form>
                <div>
                    <Button style={{margin : "5px" , width : "90px"}} variant="outlined" color='inherit' onClick={handleReset}>Reset</Button>
                    <Button style={{margin : "5px" , width : "90px"}} variant="outlined" color='inherit' onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        )}}
        
    </Formik>
  )
}

export default InputForm
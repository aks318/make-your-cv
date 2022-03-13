import { Field, FieldArray, Form, Formik } from 'formik'
import React , {useRef, useState} from 'react'
import { useReactToPrint } from "react-to-print";
import * as Yup from 'yup'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Button from '@mui/material/Button';
import MyResume from './MyResume';

const InputForm = () => {
    const myResume = useRef()
    const handlePDF =  useReactToPrint({
        content: () => myResume.current,
      });
    
    const [selectedImage , setSelectedImage] = useState(null)
    const initialValues = {
        name : "",
        number : "",
        email : "",
        city : "",
        education : "",
        experience : [{
            company : "",
            role : "",
            year : "",
            work: ""
        }],
        skills : [],
        certificates : [],
        projects : [{
            pname : "",
            year : "",
            work: ""
        }],
        about : "",
        hobbies : []
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
        education : Yup.string().required("Education Required"),
        city : Yup.string().required("City Required"),
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
                        <Grid item xs={12} sm={6}>
                            <Field name = "city">
                                {({field, form, meta}) => ( 
                                    <TextField className='inputField' {...field} id="outlined-basic" label="City"  variant="outlined" 
                                    />
                                )}
                            </Field>
                            {touched.city && errors.city && <p>{errors.city}</p>}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field name = "education">
                                {({field, form, meta}) => ( 
                                    <TextField className='inputField' {...field} id="outlined-basic" label="Highest Education"  variant="outlined" />
                                )}
                            </Field>
                            {touched.education && errors.education && <p>{errors.education}</p>}
                        </Grid>
                        <Grid item xs={12}>
                            <FieldArray name="experience">
                                {fieldArrayProps => {
                                    const {push , remove , form : {values : {experience}}} = fieldArrayProps
                                    return(
                                        <>
                                        {experience.map((expi , index) => 
                                            <div key={index} className = "arrayDiv">
                                                <Field name = {`experience[${index}].company`}>
                                                    {({field, form, meta}) => ( 
                                                        <TextField style={{width : "30%" , marginRight : "10px"}}  {...field} id="outlined-basic" label="Company" type= "text" variant="outlined" />
                                                    )}
                                                </Field>
                                                <Field name = {`experience[${index}].role`}>
                                                    {({field, form, meta}) => ( 
                                                        <TextField style={{width : "30%" , marginRight : "10px"}}  {...field} id="outlined-basic" label="Role" type= "text" variant="outlined" />
                                                    )}
                                                </Field>
                                                <Field name = {`experience[${index}].year`}>
                                                    {({field, form, meta}) => ( 
                                                        <TextField style={{width : "30%"}}  {...field} id="outlined-basic" label="Workig year" type= "text" variant="outlined" />
                                                    )}
                                                </Field>
                                                <Field name = {`experience[${index}].work`}>
                                                    {({field, form, meta}) => ( 
                                                        <TextField style={{width : "90%"}}  {...field} id="outlined-basic" label="Work" type= "text" variant="outlined" />
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
                        <Grid item xs={12} sm={12} md={4}>
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
                        <Grid item xs={12} sm={12} md={4}>
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
                            <FieldArray name="projects">
                                {fieldArrayProps => {
                                    const {push , remove , form : {values : {projects}}} = fieldArrayProps
                                    return(
                                        <>
                                        {projects.map((expi , index) => 
                                            <div key={index} className = "arrayDiv">
                                                <Field name = {`projects[${index}].pname`}>
                                                    {({field, form, meta}) => ( 
                                                        <TextField style={{width : "30%" , marginRight : "10px"}}  {...field} id="outlined-basic" label="Project" type= "text" variant="outlined" />
                                                    )}
                                                </Field>
                                                <Field name = {`projects[${index}].year`}>
                                                    {({field, form, meta}) => ( 
                                                        <TextField style={{width : "30%"}}  {...field} id="outlined-basic" label="Workig year" type= "text" variant="outlined" />
                                                    )}
                                                </Field>
                                                <Field name = {`projects[${index}].work`}>
                                                    {({field, form, meta}) => ( 
                                                        <TextField style={{width : "90%"}}  {...field} id="outlined-basic" label="Work" type= "text" variant="outlined" />
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
                        <Grid item xs={12} sm={12} md={4}>
                            <FieldArray name="hobbies">
                                {fieldArrayProps => {
                                    const {push , remove , form : {values : {hobbies}}} = fieldArrayProps
                                    return(
                                        <>
                                        {hobbies.map((Hobby , index) => 
                                            <div key={index} className = "arrayDiv">
                                                <Field name = {`hobbies[${index}]`}>
                                                    {({field, form, meta}) => ( 
                                                        <TextField style={{width : "90%"}}  {...field} id="outlined-basic" label="Hobby" type= "text" variant="outlined" />
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
                        <Grid item xs={12} className = "img-div">
                                {selectedImage && (
                                <div >
                                {/* <img alt="not fount" width="250px" height="300px" src={URL.createObjectURL(selectedImage)} /> */}
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
                    <Button style={{margin : "5px" , width : "90px"}} variant="outlined" color='inherit' onClick={handlePDF}>View</Button>
                </div>
                <div ref = {myResume}>
                    <MyResume values = {values}/>
                </div>
            </div>
        )}}
        
    </Formik>
  )
}

export default InputForm
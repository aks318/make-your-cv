import { fontSize } from '@mui/system'
import React from 'react'
import './Myresume.css'
const MyResume = ({values}) => {
  return (
    <div className='container'> 
        <div className='child-container'>
            <div className='info'>
                <div style={{display : "flex" , flexDirection : "column"}}>
                    <h2>{values.name}</h2>
                    <p style={{color : "rgb(53, 47, 47)" , alignSelf : "center"}}>{`(${values.education})`}</p>
                </div>
                <div className='contact'>
                    <div style={{marginRight : "5px" , maxWidth : "300px"}}>
                        <p style={{color : "rgb(53, 47, 47)"}}>Email: {values.email}</p>
                        <p style={{color : "rgb(53, 47, 47)"}}>Number: {values.number}</p>
                        <p style={{color : "rgb(53, 47, 47)"}}>City: {values.city}</p>
                    </div>
                    {values.file && 
                        <img alt="not fount" width="100px" height="120px" src={URL.createObjectURL(values.file)} />
                    }
                </div>
            </div>
            <hr  style={{
                borderColor: 'red',
                width: "98%",
                marginTop: "15px"
            }}/>
            <div className='about'>
                    <p style={{color : "rgb(53, 47, 47)"  , fontSize : "15px" , margin : "10px 20px 10px 20px" , textAlign: "justify"}}>{values.about}</p>
            </div> 
            <div className='experience'>
                <h4>Experience</h4>
                {values.experience.map((exp , index) => (
                    <div key={index}>
                        <h5 style={{margin : "5px 0px 5px 10px"}}>{exp.company}: <span style={{fontWeight : "450" , fontStyle : "italic"}}>{exp.role}</span> <span style={{fontWeight : "normal", fontSize : "10px"}}>({exp.year})</span></h5>
                        <p style={{color : "rgb(53, 47, 47)" , margin : "5px 20px 10px 15px"}}>{exp.work}</p>
                    </div>
                ))}
            </div>
            <div className='skills'>
                <h4>Skills</h4>
                <ul>
                    {values.skills.map((skill , index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className='skills'>
                <h4>Certificate</h4>
                <ul>
                    {values.certificates.map((certificate , index) => (
                        <li key={index}>{certificate}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MyResume
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
            <div className='skills'>
                <h4>Skills</h4>
                <ul>
                    {values.skills.map(skill => (
                        <li>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className='skills'>
                <h4>Certificate</h4>
                <ul>
                    {values.certificates.map(certificate => (
                        <li>{certificate}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MyResume
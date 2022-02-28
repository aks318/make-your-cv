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
                    <div style={{marginRight : "5px" , width : "300px"}}>
                        <p style={{color : "rgb(53, 47, 47)"}}>Email: {values.email}</p>
                        <p style={{color : "rgb(53, 47, 47)"}}>Number: {values.number}</p>
                        <p style={{color : "rgb(53, 47, 47)"}}>Address: {values.address}</p>
                    </div>
                    {values.file && 
                        <img alt="not fount" width="100px" height="120px" src={URL.createObjectURL(values.file)} />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyResume
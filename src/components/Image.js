
import React, { Component } from 'react'

export const Image = ({employee}) => {
    console.log(employee);

    
    
    return (
<>
        <img src={employee.picture.thumbnail} alt=""/>
</>
    )
}

export default Image

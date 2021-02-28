
import React, { Component } from 'react'

export const Image = ({employee}) => {

    
    
    return (
                       <div className="col-md-2 col-sm-2 col-lg-2">
                {employee.name}
                {/* {console.log(this.props.data)}
                {this.props.data.map((img,index) => (
                    <div className="columnRow">
                    <img src={img.picture.medium} alt=""/>
                    </div>
                ))
                } */}
            </div> 
    )
}

export default Image

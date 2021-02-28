import React from 'react'

const Name = ({employee}) => {

    

    return (
        <>
    <p>{employee.name.first}&nbsp;{employee.name.last}</p>
        </>
    )
}

export default Name

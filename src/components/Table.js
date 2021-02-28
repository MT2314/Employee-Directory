import React from 'react'
import Image from './Image'
import Name from './Name'
import Phone from './Phone'
import Email from './Email'
import DOB from './DOB'

const Table = ({employees, onClick}) => {

    return (
        <>
        <div className="row border-bottom border-top border-2 d-flex justify-content-center" style={{ marginTop: '80px' }}>
            <div className="col d-flex justify-content-center mt-2">
            <p>Image</p>
            </div>
            <div className="col d-flex justify-content-center mt-2">
            <a onClick = {onClick}>Name</a>
            </div>
            <div className="col d-flex justify-content-center mt-2">
                <p>Image</p>
            </div>
            <div className="col d-flex justify-content-center mt-2">
                <p>Image</p>
            </div>
            <div className="col d-flex justify-content-center mt-2">
                <p>Image</p>
            </div>
        </div>

       
    {employees.map((employee) => (    
        <div className="row mt-3 d-flex justify-content-center">
            <div className="col d-flex justify-content-center">
            <Image key = {employee.id.value} employee = {employee}/>
            </div>
            <div className="col d-flex justify-content-center">
                <Name key = {employee.id.value} employee = {employee}/>
            </div>
            <div className="col d-flex justify-content-center">
            <Phone key = {employee.id.value} employee = {employee}/>

            </div>
            <div className="col d-flex justify-content-center">
            <Email key = {employee.id.value} employee = {employee}/>

            </div>
            <div className="col d-flex justify-content-center">
            <DOB key = {employee.id.value} employee = {employee}/>

            </div>
        </div>
    ))}

        </>
    )
}

export default Table


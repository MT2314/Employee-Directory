import React from 'react'
import Image from './Image'
import Name from './Name'
import Phone from './Phone'
import Email from './Email'
import DOB from './DOB'

const Table = ({employees}) => {
    console.log(employees);

    return (
        <>
        <div className="row border-bottom border-top border-2 d-flex justify-content-center" style={{ marginTop: '80px' }}>
            <div className="col d-flex justify-content-center mt-2">
            <p>Image</p>
            </div>
            <div className="col d-flex justify-content-center mt-2">
                <p>Name</p>
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
        <div className="row d-flex justify-content-center">
            <div className="col d-flex justify-content-center">
            <Image employee = {employee}/>
            </div>
            <div className="col d-flex justify-content-center">
                <Name employee = {employee}/>
            </div>
            <div className="col d-flex justify-content-center">
            <Phone employee = {employee}/>

            </div>
            <div className="col d-flex justify-content-center">
            <Email employee = {employee}/>

            </div>
            <div className="col d-flex justify-content-center">
            <DOB employee = {employee}/>

            </div>
        </div>
    ))}

        </>
    )
}

export default Table


    // <div className="row container">
    // {employees.map((employee) => (       
    // //   <Image  employee={employee} />
    // //   ))}
    // //     </div>
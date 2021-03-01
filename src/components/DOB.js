import React from 'react'

const DOB = ({employee}) => {

    let date1 = JSON.stringify(employee.dob.date);
    const dob = spliceSplit(date1,11,16)
    
    function spliceSplit(str, index, count, add) {
        let ar = str.split('');
        ar.splice(index, count, add);
        ar.shift();
        return ar.join('');
      }
    

    return (
        <>
    <p>{dob}</p>
        </>
    )
}

export default DOB
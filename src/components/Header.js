import React from 'react'

export const Header = () => {
    return (

        <div className = "border-bottom border-5 border-danger" style = {{backgroundColor:'navy', height: 200, width:'100%',}}>
            <h1 className="text-center lh-lg" style = {{color:'white',fontSize:50}}>Employee Directory</h1>
        <p className="text-center lh-lg" style = {{color:'white',fontSize:22}} >Click on carrots to filter by heading or use the search box to narrow your results</p>
        </div>
    )
}

export default Header


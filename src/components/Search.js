import React from 'react'

export const Search = () => {
    return (
        
        <div style={{
            position: 'absolute', left: '50%', top: '130px',
            transform: 'translate(-50%, -50%)'
        }}>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
            style = {{width: 200}} placeholder = 'Search'/>
        </div>
    )
}

export default Search

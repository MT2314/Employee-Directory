import React from 'react'

export const SearchBox = (props) => {
    return (
        
        <div style={{
            position: 'absolute', left: '50%', top: '240px',
            transform: 'translate(-50%, -50%)'
        }}>
            <input type="search" className="search form-control border-5"
            style = {{width: 300}} placeholder = {props.placeholder} onChange = {props.handleChange} />
        </div>
    )
}

export default SearchBox
// import React from "react";

// function SearchForm(props) {
//   return (
//     <form>
//       <div className="form-group">
//         <label htmlFor="search">Search:</label>
//         <input
//           onChange={props.handleInputChange}
//           value={props.value}
//           name="search"
//           type="text"
//           className="form-control"
//           placeholder="Search For a Movie"
//           id="search"
//         />

//       </div>
//     </form>
//   );
// }

// export default SearchForm;

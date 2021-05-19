import React, { Component, Fragment } from 'react';


function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Crypto"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
      </button>
      </div>
    </form>
  );
}




export default SearchForm;





// render() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <label>
//         <input type="text" value={this.state.value} onChange={this.handleChange} />

//       </label>

//       <input type="submit" value="Submit" />
//     </form>

//   );
// }
// }



// export default SearchForm;
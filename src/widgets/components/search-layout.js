import React from 'react';
import './search-layout.css';

const SearchLayout = (props) => (
	  <div className="box">
	    <form className="App-input"
	    		onSubmit={props.handleSubmit}>

	      <input id="new"
	      		ref={props.setRef} 
	      		type="text" 
	      		placeholder="Busca algo genial" 
	      		name="search"/>
	      
	      {/*--ES6 Anonymous function for no loops that could crash the app*/}
	      <button className="icon">
	        <i className="fa fa-search"></i>
	      </button>
	    </form>
	  </div>
	);

export default SearchLayout;
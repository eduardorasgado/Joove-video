import React from 'react';
import './search-layout.css';

const SearchLayout = (props) => (
	  <div className="box">
	    <form className="App-input"
	    		onSubmit={props.handleSubmit}>
	    {/*Refs let us to stock a html element in React*/}
	      <input id="new"
	      		ref={props.setRef} 
	      		type="text" 
	      		placeholder="Busca algo genial" 
	      		value={props.value}
	      		onChange={props.handleChange}
	      		name="search"/>
	      
	      {/*--ES6 Anonymous function for no loops that could crash the app*/}
	      <button className="icon">
	        <i className="fa fa-search"></i>
	      </button>
	    </form>
	  </div>
	);

export default SearchLayout;
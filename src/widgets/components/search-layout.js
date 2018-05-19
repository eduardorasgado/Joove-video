import React from 'react';
import './search-layout.css';

const SearchLayout = () => (
	  <div className="box">
	    <form className="App-input">

	      <input id="new" type="text" placeholder="Busca algo genial"/>
	      
	      {/*--ES6 Anonymous function for no loops that could crash the app*/}
	      <button className="icon">
	        <i className="fa fa-search"></i>
	      </button>
	    </form>
	  </div>
	);

export default SearchLayout;
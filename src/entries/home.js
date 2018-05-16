import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home'
import data from '../api.json';

const homeContainer = document.getElementById("home-container");

//Llamada a containers/home.js
var homeEntry = <Home data={data} />

//Renderizamos
ReactDOM.render(homeEntry, homeContainer);

/*
npm install react react-dom --save
*/
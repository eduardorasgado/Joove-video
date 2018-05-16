import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home'
import data from '../api.json';

const container = document.getElementById("app");

//Llamada a containers/home.js
var homeEntry = <Home data={data} />

//Renderizamos
ReactDOM.render(homeEntry, container);

/*
npm install react react-dom --save
*/
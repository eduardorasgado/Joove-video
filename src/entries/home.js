import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home'
/*import Media from './src/playlist/components/media';*/
/*import Playlist from './src/playlist/components/playlist';*/
/*import Category from './src/playlist/components/category';*/
/*import data from './src/api.json'*/

const container = document.getElementById("app");

/*var categoryComponent = <Category data={data} />;*/
var homeEntry = <Home />

//Renderizamos
ReactDOM.render(homeEntry, container);

/*
npm install react react-dom --save
*/
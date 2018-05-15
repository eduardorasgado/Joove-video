import React from 'react';
import ReactDOM from 'react-dom';
/*import Media from './src/playlist/components/media';*/
/*import Playlist from './src/playlist/components/playlist';*/
import Category from './src/playlist/components/category';
import data from './src/api.json'

const container = document.getElementById("app");

var categoryComponent = <Category data={data} />;

//Renderizamos
ReactDOM.render(categoryComponent, container);

/*
npm install react react-dom --save
*/
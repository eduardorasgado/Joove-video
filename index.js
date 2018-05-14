import React from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json'
const container = document.getElementById("app");
const holaReact = <Media
						type="video"
						title="Que chingados es el bitcoin" 
						author="EduardoRasgado" 
						image = "./images/covers/bitcoin.jpg"/>;

//Renderizamos
ReactDOM.render(holaReact,container);

/*
npm install react react-dom --save
*/
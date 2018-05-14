import React from 'react';
import ReactDOM from 'react-dom';
/*import Media from './src/playlist/components/media';*/
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json'

const container = document.getElementById("app");

var playlistComponent = <Playlist data={data} />;

//Renderizamos
ReactDOM.render(playlistComponent, container);

/*
npm install react react-dom --save
*/
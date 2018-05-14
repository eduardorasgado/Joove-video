import React from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media';

const container = document.getElementById("app");

const holaReact = <Media title="Que chingados es el bitcoin" author="EduardoRasgado"/>;

//Renderizamos
ReactDOM.render(holaReact,container);

/*
npm install react react-dom --save
*/
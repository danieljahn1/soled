import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Container from './components/container'

//CSS
import './styles/styles.css'

ReactDOM.render(
<BrowserRouter>
    <Container />
</BrowserRouter>, document.getElementById('app'))

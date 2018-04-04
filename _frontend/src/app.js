import React, { Component } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';

=======
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
>>>>>>> f567866232b13866745e68193da693b249b6fe09
// COMPONENTS
import Container from './components/container'
import store from './redux/store'

//CSS
import './styles/styles.css'

<<<<<<< HEAD
ReactDOM.render(
<BrowserRouter>
    <Container />
</BrowserRouter>, document.getElementById('app'))
=======
ReactDOM.render(<Provider store={store}>
<BrowserRouter>
    <Container />
</BrowserRouter>
</Provider>, document.getElementById('app'))
>>>>>>> f567866232b13866745e68193da693b249b6fe09

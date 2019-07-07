import React from 'react';
import logo from '../src/assets/Group.svg';
import bitlab from '../src/assets/logo-bitlab.png'
import './App.css';
import '../src/styles/glyphstyle.css'


import Courses from '../src/pages/Courses';
import SoftwareCourse from '../src/pages/SoftwareCourse';

import MainPage from '../src/MainPage';

import { BrowserRouter as Router, Route, } from "react-router-dom";

export default class App extends React.Component {




  render() {
    return (
      <div className="App ">
        <Router>

         
          <Route path="/" exact component={MainPage} />
          <Route path="/courses" component={Courses} />
        </Router>
        <footer className="bg-gray-900 py-5 text-base justify-between px-24 flex">
          <img src={bitlab} class="" alt="" />
          <p className="text-white">Todos los derechos reservados, 2019 © BITLAB</p>
          <div className="flex w-40 items-center justify-between text-white ">
            <div className="flex items-center ">
              <span class="icon-phone mr-2" />
              <p>2200-4197</p>
            </div>
            <span class="icon-facebook" />
            <span class="icon-instagram" />

          </div>
        </footer>
      </div>
    );
  }
}


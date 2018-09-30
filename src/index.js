import _ from 'lodash';
import 'jquery';
import 'popper.js';
import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function component() {
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());

  console.log("foo");
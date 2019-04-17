import _ from 'lodash';
import './style.css';
import printMe from './print'

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //  Calling print.js
  printMe();

  return element;
}

console.log('From index.js');
document.body.appendChild(component());

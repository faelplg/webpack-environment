/**
 * @file index.js
 * @desc Main index of the application.
 */
console.log('%cWebpack environment for Front End development.', 'color: #21eb29; background: #222; padding: 8px;');

/** HACK: Use this to force hot reload of the index.html file in some environments. */
/** NOTE: Only for development environments. */
// import './index.html';

/** Project main packages */
// import package from 'package';

/** Project filters */
// import {filters} from './filters';

/** Project third part libraries */
// import 'moment';

/** Project style */
import './base.scss';

/** Multiple entries. */
// import print from './print';
// print.printMe();

/** States */
// import {states} from './states/index';
// import './states/index';

/** State components */
import List from './js-components/list/list.component';
const listComponent = new List('.mdc-list');
listComponent.status();

// import Button from './components/button/button.component';
// const buttonComponent = new Button('.button');
// buttonComponent.status();.

// import DataTable from './js-components/data-table/data-table.component';
// const dataTable = new DataTable('.mdc-data-table');
// dataTable.status();

/** Assets */
import Package from '../package.json';
const packageObjectElement = document.getElementById('package-object');
packageObjectElement.innerHTML = JSON.stringify(Package, undefined, 2);
console.log('Package', Package);

const projectVersionElement = document.getElementById('project-version');
projectVersionElement.innerHTML = `v${Package.version}`;

const packageEntries = Object.entries(Package);
console.log('packageEntries', packageEntries);
// console.log('Package entries', Object.entries(Package));

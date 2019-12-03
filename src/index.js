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

/** pa ckage.json - Node Package file */
import Package from '../package.json';

/** Package title */
// const packageTitleElement = document.getElementById('package-title');
// packageTitleElement.innerHTML = Package.name;

/** Package subtitle */
const packageSubtitleElement = document.getElementById('package-subtitle');
packageSubtitleElement.innerHTML = Package.description;

/** Package version */
const packageVersionElement = document.getElementById('package-version');
packageVersionElement.innerHTML = `v${Package.version}`;

/** Package repository */
const packageRepository = document.getElementById('package-repository');
packageRepository.href = Package.repository.url.substr(4);
console.log('packageRepository', packageRepository);

/** View the Node Package object structure */
const packageElement = document.getElementById('package');
packageElement.innerHTML = JSON.stringify(Package, undefined, 2);
console.log('Package', Package);
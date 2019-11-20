/**
 * @file index.js
 * @desc Main index of the application.
 */

/** HACK: Use this to force hot reload of the index.html file in some environments. */
/** NOTE: Only for development environments. *\
// import './index.html';

/** PRoject main packages */
// import package from 'package';

/** Project filters */
// import {filters} from './filters';

/** Project third part libraries */
// import 'moment';

/** Project style */
import './base.scss';

/** States */
// import {states} from './states/index';
// import './states/index';

/** State components */
// import Button from './components/data-table/data-table.component';
// const buttonComponent = new Button('.button');
// button.status();
import DataTable from './js-components/data-table/data-table.component';
const dataTable = new DataTable('.mdc-data-table');
dataTable.status();

/** Assets */
import Package from '../package.json';
console.log('Package', Package);
console.log('Package entries', Object.entries(Package));

console.log('%cComplete index.js template.', 'color: #21eb29; background: #222; padding: 8px;');
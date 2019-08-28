/**
 * @file index.js
 * @desc Main index of the application.
 */

// REVIEW: Comente antes de colocar em produção.
// HACK: Usado para forçar hot reload de alterações no ./index.html
// import './index.html';

/** AngularJS packages */
// import angular from 'angular';
// import 'angular-animate';
// import 'angular-aria';
// import 'angular-messages';
// import 'angular-resource';
// import 'angular-sanitize';

/** Plugins */
// import 'moment';

/** AngularJS plugins */
// import 'angular-moment';
// import 'angular-loading-bar/src/loading-bar';
// import 'angular-loading-bar/src/loading-bar.css';

/** AngularJS constants */
// import {constants} from './constants';

/** AngularJS routing */
// import '@uirouter/core';
// import '@uirouter/angularjs';

/** String filters */
// import {filters} from './filters';

/** Style */
import './base.scss';

/** States */
// import {states} from './states/index';
import './states/index';

// export const app = 'app';

/** AngularJS module */
// angular
//   .module('app', [
//     'ngAria',
//     'ngSanitize',
//     'ngMessages',
//     'ngAnimate',
//     'ngResource',
//     'angular-loading-bar',
//     'ui.router',
//     constants,
//     filters,
//     states
//   ]);

console.log('%cAmbiente de desenvolvimento web.', 'color: #21eb29; background: #222; padding: 8px;');

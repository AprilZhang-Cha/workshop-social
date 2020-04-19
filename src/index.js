import $ from 'jquery';
import './style.scss';
// const $ = require('jquery');
let num = 0;
// eslint-disable-next-line no-useless-escape
setInterval(() => { $('#main').html(`You\'\ ve been on this page for ${num} seconds.`); num += 1; }, 1000);

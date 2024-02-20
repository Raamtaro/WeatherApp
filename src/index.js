import _ from 'lodash';
import './style.css';
import apiKey from './secret';
import getForecast from './apiRequest';


console.log(apiKey)
console.log(getForecast(apiKey, 'london'))

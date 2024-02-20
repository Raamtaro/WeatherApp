// import _ from 'lodash';
import './style.css';
import apiKey from './secret';
import getForecast from './apiRequest';
import formComponents from './formSetup';


console.log(apiKey)
console.log(getForecast(apiKey, 'Chicago'))

formComponents.formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const searchedLocation = formComponents.userSearch.value;
  getForecast(apiKey, searchedLocation);
})



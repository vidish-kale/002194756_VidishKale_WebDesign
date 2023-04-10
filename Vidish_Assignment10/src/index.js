import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DailyWeather from './components/DailyWeather';
import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/dailyWeather/:id' component={DailyWeather} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

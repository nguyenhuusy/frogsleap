import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Statistic from './components/Statistic';
import Activities from './components/Activities';
import Videos from './components/Videos';
import Quotes from './components/Quotes';
import './App.css';
//import NotFound from './pages/NotFound';


import './App.css';

function App() {
  return (
     <Provider store={ store }>
      
        <div className="app">
          <BrowserRouter>
            <Header/>
            <Statistic/>
            <Activities/>
            <Videos/>
            <Quotes/>
            <Switch>
              {/* <Route exact path="/" component={ Home }/> */}
              
              {/* <Route component={ NotFound }/> */}
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
  );
}

export default App;

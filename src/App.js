import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';

//import NotFound from './pages/NotFound';


import './App.css';

function App() {
  return (
     <Provider store={ store }>
      
        <div className="app">
          <BrowserRouter>
            <Header/>
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

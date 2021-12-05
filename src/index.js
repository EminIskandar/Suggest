import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App'; 
import GlobalStyle from './globalStyled'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <GlobalStyle/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 

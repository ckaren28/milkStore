import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './state/store';
import registerServiceWorker from './registerServiceWorker';
import {fetchProducts} from './state/product/actions';


const store = configureStore({  });


store.dispatch(fetchProducts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector('#root')
)

registerServiceWorker();

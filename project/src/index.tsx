import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import App from './components/app/app';
import {films} from './mock/films';
import {reviews} from './mock/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <App films={films} reviews={reviews} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

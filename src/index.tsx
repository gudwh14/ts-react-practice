import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import rootReducer from "./Redux/modules";
import {Provider} from "react-redux";
import {rootSaga, storeRF} from "./Redux/ReduxToolkit/modules";
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter} from "react-router-dom";


const store = createStore(rootReducer);
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={storeRF}>
          <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
          </QueryClientProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

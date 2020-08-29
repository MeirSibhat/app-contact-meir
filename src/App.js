import React from 'react';
import './App.css';
import ContactMain from './contactApp.js/contactMain';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { contReducer } from './contactApp.js/reducer/contactReducer';
// import Test from './contactApp.js/test';

const myStore = createStore(contReducer);
function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <button className="btn btn-info"> click me </button>
        <ContactMain />
   {/* <Test/> */}
      </div>
    </Provider>

  );
}

export default App;


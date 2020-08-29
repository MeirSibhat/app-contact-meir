import React from 'react';
import './App.css';
import ContactMain from './contactApp.js/contactMain';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { contReducer } from './contactApp.js/reducer/contactReducer';

const myStore = createStore(contReducer);
function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
      <br/>
        <ContactMain />
      </div>
    </Provider>

  );
}

export default App;


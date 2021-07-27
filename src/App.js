import React from 'react';
import Provider from './context/PlanetsProvider';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>
  );
}

export default App;

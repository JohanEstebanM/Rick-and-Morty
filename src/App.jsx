import React from 'react';
import Header from './components/Header';
import Searcher from './components/Searcher';
import './App.css';

const App = () => {
  return (
    <>
      <div className="prose">
        <Header></Header>
        <Searcher></Searcher>
      </div>
    </>
  );
};

export default App;

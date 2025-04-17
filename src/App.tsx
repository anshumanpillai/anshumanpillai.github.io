import React from 'react';
import './App.css';
import WebPageHeader from './header/webPageHeader';
import IntroductoryText from './IntroductoryText';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <WebPageHeader/>
          <IntroductoryText/>
        </header>
      </div>
    </div>
  );
}

export default App;

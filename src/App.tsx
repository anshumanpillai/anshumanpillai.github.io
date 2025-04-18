import React from 'react';
import './App.css';
import WebPageHeader from './header/webPageHeader';
import IntroductoryText from './IntroductoryText';
import AboutSection from './about/AboutSection';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <WebPageHeader/>
          <IntroductoryText/>
        </header>
        <div id='About'>
          <AboutSection/>
        </div>
      </div>
    </div>
  );
}

export default App;

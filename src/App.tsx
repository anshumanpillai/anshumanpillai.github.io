import React from 'react';
import './App.css';
import WebPageHeader from './header/webPageHeader';
import IntroductoryText from './IntroductoryText';
import AboutSection from './about/AboutSection';
import ProjectSection from './projects/ProjectSection';
import CertificateSection from './about/certifications/certificateSection';

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
        <div id="Projects">
          <ProjectSection/>
        </div>
        <div id='Certifications'>
          <CertificateSection/>
        </div>
      </div>
    </div>
  );
}

export default App;

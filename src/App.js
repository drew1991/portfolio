import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import Footer from './components/Footer';
import resumeData from './resumeData';
import WhatsAppButton from './components/Whatsapp';
import EmailButton from './components/EmailUs';
import ScrollToTopButton from './components/ScrollToTop';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
        <WhatsAppButton/>
        <EmailButton />
        <ScrollToTopButton />

      </div>
    );
  }
}

export default App;
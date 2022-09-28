import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentNavSection, handleSectionChange] = useState('About Me');

  const renderSection = () => {
    switch (currentNavSection) {
      case 'Portfolio': return <Portfolio />;
      case 'Contact': return <ContactForm />;
      case 'Resume': return <Resume />;
      default: return <About />;
    }
  };

  return (
    <div>
      <Header 
          currentNavSection={currentNavSection}
          handleSectionChange={handleSectionChange}
      />
      <main>
        <div>
          {renderSection(currentNavSection)}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
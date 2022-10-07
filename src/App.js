import React, { useState } from 'react'
import About from './components/About'
import Nav from './components/Nav'
import Project from './components/Project'
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  const [contactSelected, setContactSelected] = useState(false)
  const [portfolioSelected, setPortfolioSelected] = useState(false)
  const [resumeSelected, setResumeSelected] = useState(false)

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {contactSelected ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : portfolioSelected ? (
          <>
            <Project></Project>
          </>
        ) : resumeSelected ? (
          <>
            <Resume></Resume>
          </>
        ) : (
          <About></About>
        )}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
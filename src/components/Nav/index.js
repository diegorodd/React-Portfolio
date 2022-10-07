import React from 'react'

function Nav(props) {
  const { setContactSelected, setPortfolioSelected, setResumeSelected } = props

  // conditional rendering
  return (
    <header className="header-container">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {' '}
          </span>{' '}
          DIEGO RODRIGUEZ
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              className="nav-item"
              data-testid="about"
              href="#about"
              onClick={() => {
                setContactSelected(false)
                setPortfolioSelected(false)
                setResumeSelected(false)
              }}
            >
              About me
            </a>
            <a
              href="#portfolio"
              className="nav-item"
              data-testid="portfolio"
              onClick={() => {
                setContactSelected(false)
                setPortfolioSelected(true)
                setResumeSelected(false)
              }}
            >
              Portfolio
            </a>
            <a
              href="#contactMe"
              className="nav-item"
              data-testid="contactMe"
              onClick={() => {
                setContactSelected(true)
                setPortfolioSelected(false)
                setResumeSelected(false)
              }}
            >
              Contact Me
            </a>
            <a
              href="#resume"
              className="nav-item"
              data-testid="resume"
              onClick={() => {
                setContactSelected(false)
                setPortfolioSelected(false)
                setResumeSelected(true)
              }}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav

import React from 'react'
import gitLogo from '../../assets/github-512.webp'
import linkLogo from '../../assets/linkedinlogo.png'
import twitterLogo from '../../assets/twitterLogo.png'

function Footer() {
  return (
    <section className="footer-container">
      <a href="https://github.com/diegorodd">
        <img
          src={gitLogo}
          className="footer-logo-git"
          style={{ width: '3%' }}
          alt="logo"
        />
      </a>
      <a href="https://www.linkedin.com/in/diego-andres-rodriguez-923990246/">
        <img
          src={linkLogo}
          className="footer-logo-linkedin"
          style={{ width: '3%' }}
          alt="logo"
        />
      </a>
      <a href="https://twitter.com/home">
        <img
          src={twitterLogo}
          className="footer-logo-twitter"
          style={{ width: '3%' }}
          alt="logo"
        />
      </a>
    </section>
  )
}

export default Footer

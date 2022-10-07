import React from 'react'

function Project() {
  return (
    <div className="my-2">
      <p>Portfolio Page</p>
      <section id="work">
        <div class="portfolio-sections">
          <div class="projects">
            <a
              href="https://github.com/diegorodd/note-taker"
              class="note-taker"
            >
              <div>
                <p class="note-taker">
                  <br />
                  <span>
                    Node.js/Express/mysql2/Sequelize/Handlebars HTML/CSS
                  </span>
                </p>
              </div>
            </a>
            <a
              href="https://github.com/diegorodd/Professional-README-Generator"
              class=" readme"
            >
              <div>
                <p>
                  README
                  <br />
                  <span>html/CSS/JavaScript</span>
                </p>
              </div>
            </a>
            <a
              href="https://github.com/diegorodd/Work-Day-Scheduler/"
              class=" Work-Day"
            >
              <div>
                <p>
                  WORK-DAY-SCHEDULER
                  <br />
                  <span>html/css</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project

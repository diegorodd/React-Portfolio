import React from 'react';
import Project from '../Project';

function Portfolio() {

    return(
        <section id="work" className="contact-section">
            <div className="flex-row">
                <h2 className="section-title primary-border">
                    Work
                </h2>
            </div>
            <div>
                <Project />
            </div>
        </section>
    )
}

export default Portfolio;
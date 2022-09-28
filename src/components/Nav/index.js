import React from 'react';

function Nav(props) {
    const navSections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav>
            <ul>
                {navSections.map(section => (
                    <li key={section}>
                        <button
                            onClick={() => props.handleSectionChange(section)}
                        >
                            {section}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
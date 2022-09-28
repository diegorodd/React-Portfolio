mport React from 'react';
import Nav from '../Nav';

function Header({ currentNavSection, handleSectionChange }) {

    return (
        <header>
            <h1> Diego </h1>
            <Nav
                currentNavSection={currentNavSection}
                handleSectionChange={handleSectionChange}
            ></Nav>
        </header>
    )
}

export default Header;
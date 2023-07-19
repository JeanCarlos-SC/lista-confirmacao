import React from 'react';
import '../style/Header.css';
import capa from '../img/convite-header-sem(2).png';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
render() {
    const { admin } = this.props;
    return (
      <>
        <header>
          <img src={capa} />
        </header>
        {admin && (
          <Nav
            expand='lg'
            className='header-nav'
            variant='underline'
            defaultActiveKey='/results'
          >
            <Nav.Link href='/results' className='nav-link'>Visualizar Confirmações</Nav.Link>
          </Nav>
        )}
      </>
    );
  }
}
export default Header;

import React from 'react';
import Table from 'react-bootstrap/Table';
import { CheckCircle, XCircle } from 'feather-icons-react/build/IconComponents';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import '../style/ResultGrid.css'

class ResultGrid extends React.Component {
  render() {
    const { convidados } = this.props;
    return (
      <>
        <Nav
          expand='lg'
          className='header-nav'
          variant='underline'
          defaultActiveKey='/'
        >
          <Nav.Link href='/' className='nav-link'>
            Página Inicial
          </Nav.Link>
        </Nav>
        <Table
          striped
          bordered
          hover
          variant='none'
          className='mb-0 mt-2'
          responsive
        >
          <thead>
            <tr>
              <th>Nome</th>
              <th>Confirmado</th>
              <th>Respondeu a confirmação</th>
            </tr>
          </thead>
          <tbody>
            {convidados.map((convidado) => (
              <tr key={convidado.id}>
                <td>{convidado.name}</td>
                <td>
                  {convidado.confirmado ? (
                    <Button variant='success' className='rounded-pill'>
                      <CheckCircle />
                    </Button>
                  ) : (
                    <Button variant='danger' className='rounded-pill'>
                      <XCircle />
                    </Button>
                  )}
                </td>
                <td>
                  {!convidado.mostrar ? (
                    <Button variant='success' className='rounded-pill'>
                      <CheckCircle />
                    </Button>
                  ) : (
                    <Button variant='danger' className='rounded-pill'>
                      <XCircle />
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
export default ResultGrid;

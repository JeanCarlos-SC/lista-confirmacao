import React from 'react';
import Table from 'react-bootstrap/Table';
import { CheckCircle, XCircle } from 'feather-icons-react/build/IconComponents';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import '../style/ResultGrid.css'

class ResultGrid extends React.Component {
  render() {
    const { convidados } = this.props;
    return (
      <>
        <Navbar expand='lg' className='bg-body-tertiary header-grid'>
          <Navbar.Brand href='/'>Página Inicial</Navbar.Brand>
        </Navbar>
        <Table striped bordered hover variant='none' className='mb-0 mt-2' responsive>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Confirmado</th>
              <th>Respondeu a confirmação</th>
            </tr>
          </thead>
          <tbody>
            {convidados.map((convidado) => (
              <tr
                key={ convidado.id }
              >
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

import React from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import '../style/SearchInput.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchInput extends React.Component {
  state = {
    initalDate: [],
    names: [],
    search: '',
  };

  componentDidMount() {
    this.setState({ initalDate: [ ...this.props.initalState ] });
  }

  filterNames = () => {
    const { initalDate, search } = this.state;

    const namesFiltered = initalDate.filter((convidado) =>
      convidado.name.toUpperCase().includes(search.toUpperCase()),
    );

    this.setState(() => ({ names: [ ...namesFiltered ] }));

    this.props.handleChange(namesFiltered);
  };

  handleSearch = ({ target }) => {
    this.setState({ search: target.value }, () => {
      const { search, initalDate } = this.state;

      if (!search) {
        this.setState({ names: initalDate });

        this.props.handleChange(initalDate);
      } else {
        this.filterNames()
      }
    });
  };

  render() {
    const { search, admin } = this.state;
    return (
      <div className={ admin ? 'margin' : 'margin-convidado'}>
        <InputGroup className='mb-3'>
          <Form.Control
            ref='inputSearch'
            placeholder='Buscar por nome (Conforme o convite)'
            aria-label='Botão de busca'
            aria-describedby='btn-search'
            value={search}
            onInput={this.handleSearch}
          />
          <Button variant='outline-light' id='button-addon2'>
            <FeatherIcon icon='search' />
          </Button>
        </InputGroup>
      </div>
    );
  }
}
export default SearchInput;

import React from 'react';
import { getAll } from '../services/api'
import ConviteCard from '../components/ConviteCard';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput'
import '../style/home.css';

class Home extends React.Component {
  state = {
    names: [],
    firstLoad: true,
  };

  async componentDidMount() {
    const { convidados } = await getAll();

    const convidadosSorted = convidados
      .filter((convidado) => convidado.mostrar)
      .sort((a, b) => a.name.localeCompare(b.name));
      
    this.setState({ names: convidadosSorted, firstLoad: false });
  }

  handleChange = (value) => {
    this.setState({ names: value });
  };

  render() {
    const { names, firstLoad } = this.state;
    return (
      <div className='div-main'>
        <Header />
        { !firstLoad && (
          <SearchInput initalState={names} handleChange={this.handleChange} />
        )}
        <main>
          <section className='card-item'>
            {names.map((element) => (
              <ConviteCard
                key={element.id}
                name={element.name}
                id={element.id}
              />
            ))}
          </section>
        </main>
      </div>
    );
  }
}

export default Home;

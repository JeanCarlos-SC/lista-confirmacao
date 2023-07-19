import React from 'react';
import { getAll } from '../services/api'
import ConviteCard from '../components/ConviteCard';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput'
import '../style/home.css';
import { withSwal } from 'react-sweetalert2';

class Home extends React.Component {
  state = {
    names: [],
    firstLoad: true,
    admin: false,
  };

  async componentDidMount() {
    const { convidados } = await getAll();
    const convidadosSorted = convidados
      .filter((convidado) => convidado.mostrar)
      .sort((a, b) => a.name.localeCompare(b.name));

    this.setState({ names: convidadosSorted, firstLoad: false });

  const admin = localStorage.getItem('admin')
   if (!admin) {
    this.showInitialAlert();
   } else {
    this.setState({ admin: true })
   }
  }

  showInitialAlert = () => {
    this.props.swal
      .fire({
        title: 'Quem você é?',
        text: 'Selecione apenas umas das opções',
        icon: 'question',
        confirmButtonColor: '#cf7bb6',
        confirmButtonText: 'Noivo/Noiva',
        showCancelButton: true,
        cancelButtonColor: '#cf7bb6',
        cancelButtonText: 'Convidado',
        allowOutsideClick: false,
      })
      .then((confirmed) => {
        if (confirmed.isConfirmed) {
          this.props.swal
            .fire({
              title: 'Digite a senha super secreta',
              input: 'text',
              confirmButtonText: 'Entrar',
              confirmButtonColor: '#cf7bb6',
              showLoaderOnConfirm: true,
              preConfirm: (password) => {
                if (password === 'Kw{+<)^B17wY@6j?') {
                  this.setState({ admin: true });
                  localStorage.setItem('admin', 'true')
                }
              },
              allowOutsideClick: false,
            })
            .then(() => {
              if (!this.state.admin) {
                this.props.swal.fire({
                  text: 'Senha Incorreta',
                  icon: 'error',
                  confirmButtonColor: '#cf7bb6',
                });
              }
            });
        }
      });
  };

  handleChange = (value) => {
    this.setState({ names: value });
  };

  render() {
    const { names, firstLoad, admin } = this.state;
    return (
      <div className='div-main'>
        <Header admin={admin}/>
        {!firstLoad && (
          <SearchInput initalState={names} handleChange={this.handleChange} admin={admin}/>
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

export default withSwal(Home);

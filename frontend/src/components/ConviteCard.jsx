import React from 'react';
import '../style/ConviteCard.css';
import { withSwal } from 'react-sweetalert2';
import { hide, confirm } from '../services/api'

class ConviteCard extends React.Component {
  showConfirmAlert = () => {
    this.props.swal
      .fire({
        title: 'Tem certeza?',
        text: 'Deseja realmente "CONFIRMAR"',
        icon: 'question',
        confirmButtonColor: '#31C28D',
        confirmButtonText: 'Sim',
        showCancelButton: true,
        cancelButtonColor: '#ff0000',
        cancelButtonText: 'Cancelar',
      })
      .then((confirmed) => {
        if (confirmed.isConfirmed) {
          this.props.swal.fire({
            title: 'Deus Abençoe!!',
            text: 'Ficamos muito felizes com a sua presença, estaremos aguardando!',
            icon: 'success',
            confirmButtonColor: '#31C28D',
            confirmButtonText: 'Amémm!',
          })
          .then(confirmed => {
            if (confirmed.isConfirmed) {
              confirm(this.props.id).then((payload) => {
                if (payload) {
                  this.props.swal.fire({
                    title: 'Erro inesperado',
                    text: payload,
                    icon: 'error',
                    timer: 3000,
                    showConfirmButton: false,
                  });
                }
                window.location.reload(true);
              });
            }
          });
        }
      });
  };

  showNotConfirmAlert = () => {
    this.props.swal
      .fire({
        title: 'Tem certeza?',
        text: 'Deseja realmente "NÃO CONFIRMAR"',
        icon: 'question',
        confirmButtonColor: '#31C28D',
        confirmButtonText: 'Sim',
        showCancelButton: true,
        cancelButtonColor: '#ff0000',
        cancelButtonText: 'Cancelar',
      })
      .then((confirmed) => {
        if (confirmed.isConfirmed) {
          this.props.swal.fire({
            title: 'Deus Abençoe!!',
            text: 'Sentimos muito por não poder ir, mas temos certeza que Deus vai preparar outra oportunidade!',
            icon: 'error',
            timer: 3000,
            showConfirmButton: false,
          })
          .then(() => {
                  hide(this.props.id).then((payload) => {
                    if (payload) {
                      this.props.swal.fire({
                        title: 'Erro inesperado',
                        text: payload,
                        icon: 'error',
                        timer: 3000,
                        showConfirmButton: false,
                      });
                    }
                    window.location.reload(true);
                  });
          });
        }
      });
  }

  render() {
    const { name } = this.props;
    return (
      <section className='product-card'>
        <h2>{ name }</h2>
        <div className='div-btns'>
          <button
            type='button'
            data-testid='product-add-to-cart'
            onClick={this.showConfirmAlert}
            className='btn-addToCart'
          >
            Confirmar
          </button>
          <button
            type='button'
            data-testid='product-not'
            onClick={this.showNotConfirmAlert}
            className='btn-not'
          >
            Não Confirmar
          </button>
        </div>
      </section>
    );
  }
}

export default withSwal(ConviteCard);

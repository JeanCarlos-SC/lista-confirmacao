import React from 'react';
import { getAll } from '../src/services/api';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ResultGrid from './components/ResultGrid';

class App extends React.Component {
  state = {
    convidados: [],
    admin: false,
  };

  async componentDidMount() {
    const { convidados } = await getAll();
    this.setState({ convidados });
  }

  render() {
    const { convidados, admin } = this.state
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route
            exact
            path='/results'
            render={(props) => <ResultGrid {...props} convidados={ convidados }/>}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

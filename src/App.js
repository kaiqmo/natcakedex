import React, {Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';
import {Footer} from './components/footer/footer.component';
import cakesJson from './cake';
 
class App extends Component {
  constructor(){
    super();

    this.state = {
      cakes: cakesJson,
      searchField:''
    };

  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  };

  render(){
    const { cakes, searchField } = this.state;
    const filteredCakes = cakes.filter(cake=> 
      cake.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    return (
      <div className="App">
        <h1>Nat CakeDex</h1>
        <SearchBox 
          placeholder='Search Cake'
          handleChange={this.handleChange}
        />
        <CardList cake={filteredCakes} />
        <Footer />
      </div>
    );
  }
}
export default App;

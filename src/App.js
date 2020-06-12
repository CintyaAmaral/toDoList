import React, { Component } from 'react';

import './style.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      newItem:"",
      list: []
    }
  }

  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  render () {
    return (
      <div className="App">
        <div className="container">
          <div className="header"></div>
          <h1>To Do List</h1>
                   
          <input 
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>
            Add
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <h2>{item.value}</h2>
                  <button onClick={() => this.deleteItem(item.id)}>x
                  </button>
                </li>
              )
            })}
          </ul>

        </div>
      </div>
    );
  }
  
}

export default App;

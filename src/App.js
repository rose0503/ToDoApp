import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/TodoApp';
import classNames from 'classnames';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isDisplay: false,
      valueitem: "",
      newItem : "",
      listItems: [
        {title: "Đi chợ", isDone: false},
        {title: "Đi chơi", isDone: false},
        {title: "Học bài", isDone: true},
        {title: "Hát", isDone: true},
        {title: "Ca", isDone: true},
      ]
    }
    this.onClickBtn = this.onClickBtn.bind(this);
    this.onHide = this.onHide.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDone = this.onDone.bind(this);

  }

  onDone(item){
    return (event) => {
      let isDone = item.isDone;
      let {listItems} = this.state;
      let index = listItems.indexOf(item);
      this.setState({
        listItems: [
          ...listItems.slice(0, index),
          {
            ...item, isDone: !isDone
          },
          ...listItems.slice(index + 1)
        ]
      })
    }
  }
  
  onClickBtn(){
    this.setState({
      isDisplay: true
    })
  }

  onHide(){
    this.setState({
      isDisplay: false
    })
  }

  onKeyUp(event){
    let text = event.target.value;
    if(!text){
      return;
    }
    text = text.trim();
    if(!text){
      return;
    }
    this.setState({
      valueitem: text
    })
    // console.log("value", this.state.valueitem)
  }

  addItem(){
    this.setState({
      listItems: [{title: this.state.valueitem, isDone: false},
      ...this.state.listItems
      ],
      isDisplay: false,
      newItem: ""
    })
  }

onChange(event){
  this.setState({
    newItem: event.target.value
  })
}



  render() {
    let {listItems, isDisplay, newItem} = this.state;
    return (
      <div className="App">
        <div className="Header">
          <i className="fas fa-bars"></i>
          <div>DaiList</div>
        </div>
        <TodoApp listItems={listItems} onDone ={this.onDone} />   
        <div className="btnAdd" onClick={this.onClickBtn}>
          <i className="fas fa-plus"></i>
        </div>
      
      {/* <div className = {classNames("myModal",{ isModal: isDisplay=== true})}> */}
      <div className= {classNames("myModal",{ isModal: isDisplay=== true})}>
        <span className="close" onClick={this.onHide} >&times;</span>
        <div className="Modal">
          <h1>Add item ToDo</h1>
          <input className="inputAdd" onKeyUp={this.onKeyUp} value={newItem} onChange={this.onChange}></input>
          <div className="groupButton">
            <button  onClick={this.addItem} >Add</button>
            <button onClick={this.onHide}>Cancel</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;

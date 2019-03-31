import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = {
      result: 0,
      num1: '',
      num2: ''
    }

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.mult = this.mult.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  //your code here

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1}  value={this.state.num1} />
        <input onChange={this.setNum2}  value={this.state.num2}/>
        <button onClick={this.clear}>Clear</button>
        <br/>
        <button onClick={this.add} >+</button>
        <button onClick={this.sub} >-</button>
        <button onClick={this.mult} >*</button>
        <button onClick={this.divide} >/</button>
      </div>
    );
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }

  add() {
   let result =  this.state.num1 + this.state.num2 ;
   this.setState({ result });
  }

  sub() {
    let result =  this.state.num1 - this.state.num2 ;
    this.setState({ result });
  }

  mult() {
    let result =  this.state.num1 * this.state.num2 ;
    this.setState({ result });
  }

  divide() {
    let result = this.state.num1 / this.state.num2 ;
    this.setState({ result });
  }

  clear() {
    this.setState({num1: "", num2: "", result: 0})
  }
}

export default Calculator;

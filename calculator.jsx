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

    this.one = this.one.bind(this);
    this.two = this.two.bind(this); 
    this.three = this.three.bind(this);
    this.four = this.four.bind(this); 
    this.five = this.five.bind(this);
    this.six = this.six.bind(this);
    this.seven = this.seven.bind(this);
    this.eight = this.eight.bind(this);
    this.nine = this.nine.bind(this);
    this.zero = this.zero.bind(this);
  }

  //your code here

  render(){
    return (
      <div className="main">
        <h2>{this.state.result}</h2>
        <div className="input">
          <input onChange={this.setNum1}  value={this.state.num1} />
          <input onChange={this.setNum2}  value={this.state.num2}/>
        </div>

        <div className="top">
          <button onClick={this.seven}>7</button>
          <button onClick={this.eight}>8</button>
          <button onClick={this.nine}>9</button>
          <button onClick={this.add} >+</button>
        </div>

        <div className="mid">
          <button onClick={this.four}>4</button>
          <button onClick={this.five}>5</button>
          <button onClick={this.six}>6</button>
          <button onClick={this.sub} >-</button>
        </div>

        <div className="bottom">
          <button onClick={this.one}>1</button>
          <button onClick={this.two}>2</button>
          <button onClick={this.three}>3</button>
          <button onClick={this.mult} >*</button>
        </div>

        <div className="btn">
          <button onClick={this.zero}>0</button>
          <button onClick={this.divide} >/</button>
          <button onClick={this.clear}>Clear</button>
        </div>
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

  one() {
    if (this.state.num1 !== "") {
      this.setState({ num2: 1 }) 
    } else {
      this.setState({ num1: 1 }) 
    }
   }

  two() {
    if (this.state.num1 !== "") {
      this.setState({ num2: 2 })
    } else {
      this.setState({ num1: 2 })
    }

  }

  three() {
    if (this.state.num1 !== "") {
      this.setState({ num2: 3 })
    } else {
      this.setState({ num1: 3 })
    }

  }

  four() {
    if (this.state.num1 !== "") {
      this.setState({ num2: 4 })
    } else {
      this.setState({ num1: 4 })
    }

  }

  five() {
    if (this.state.num1 !== "") {
      this.setState({ num2: 5 })
    } else {
      this.setState({ num1: 5 })
    }

  }

  six() {
    if (this.state.num1 !== "") {
      this.setState({ num2: 6 })
    } else {
      this.setState({ num1: 6 })
    }

  }

  seven() {
    if (this.state.num1 !== "") {
      this.setState({ num2: 7 })
    } else {
      this.setState({ num1: 7 })
    }

  }

  eight() {
    if (this.state.num1 !== "") {
      this.setState({ num2: 8 })
    } else {
      this.setState({ num1: 8 })
    }

  }

  nine() {
    if (this.state.num1 !== "") {
      this.setState({ num2: 9 })
    } else {
      this.setState({ num1: 9 })
    }
  }

  zero() {
    if (this.state.num1 !== "") {
      this.setState({ num2: 0 })
    } else {
      this.setState({ num1: 0 })
    }

  }

  clear() {
    this.setState({num1: "", num2: "", result: 0})
  }
}

export default Calculator;

import React, { Component, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      Hello React!!
      <FuncComp initNumber={2}></FuncComp>
      <Classcomp initNumber={2}></Classcomp>
    </div>
  );
}

function FuncComp(props) {
  let numberState = useState(props.initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];
  console.log(numberState);

  
  // let dateState = useState((new Date()).toString);
  // let _date = dateState[0];
  // let setDate = dateState[1]; 
  let [_date, setDate] = useState((new Date()).toString());
  // 주석처리 한 부분을 동시에 작업하는 방법. (ES6의 방식)

  return(
    <div className="container">
      <h2>function style component</h2>
      <p>Number:{props.initNumber}</p>
      <p>Number:{number}</p>
      <p>Date:{_date}</p>
      
      <input type = "button" value = "random" onClick={
          function(){
          setNumber(Math.random());
          }
      }></input>

      <input type = "button" value = "date" onClick={
          function(){
          setDate((new Date()).toString());
          }
      }></input>
    </div>
  );
}

let classStyle = 'color:blue';  //콘솔창에서 나타나는 글자의 색상 설정

// 라이프사이클 동작순서 : constructor -> componentWillMount -> render -> componentDidMount
// 프로그램의 동작되었다가 종료될때 자동적으로 사용되어지는 함수.

// 여기에 적어둔 함수는 우리가 만드는것도 아니고, 
// 우리가 호출하는것도 아닌 프로그램에 내장되어 있는 함수가 자동적으로 실행되는 함수

class Classcomp extends Component{
  state = {
    number:this.props.initNumber,
    date:(new Date()).toString()
  }

  componentWillMount(){
    console.log("%cclass => componentWillMount", classStyle);
  }

  componentDidMount(){
    console.log("%cclass => componentWillMount", classStyle);
  }

  render(){
    console.log("%cclass => render", classStyle);
    return(
      <div className='container'>
        <h2>class style component</h2>
        {/* <p>Number:{this.props.initNumber}</p> */}
        <p>Number:{this.state.number}</p>
        <p>Date:{this.state.date}</p>

        <input type = "button" value = "random" onClick={
        function(){
         this.setState({number:Math.random()});
        }.bind(this)
        }></input>

        <input type = "button" value = "date" onClick={
        function(){
         this.setState({date:new Date().toString()});
        }.bind(this)
        }></input>
      </div>
    );
  }
}

export default App;
// ES5 -> ES6                 // let[a,b,c] : 한번의 값을 알아서 받고 매칭시킨다.
//         ^                  // let a,b,c  : 낱개
//         문법
// import logo from './logo.svg';
import './App.css';
import React,  { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import Table from './components/Table';
import Image from './components/Image';
import Button from './components/Button';

class App extends Component{
  render(){
    return (
      <div>
        <Subject title="WEB" sub="World Wide Web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
        <Table></Table>
        <Image></Image>
        <Button></Button>
      </div>
    );
  }
}

  export default App;
  // (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );


import { Component } from 'react';
import './App.css';

class Nav extends Component{
  state = {
    list:[]
  }
  componentDidMount(){
    // fetch('list.json')     //public에 있는 데이터 파일 실행
    // .then((result)=>result.json())
    // .then((json)=>console.log(json).bind(this));

    fetch('list.json')
    .then(function(result){
      return result.json();
    })
    .then(function(json) {
      console.log(json);
      this.setState({list:json})
    }.bind(this));
  }
  render(){
    let listTag =[];
    for(let i=0; i<this.state.list.length; i++){
      let li = this.state.list[i]
      listTag.push(<li key={li.id}>
        <a href={li.id} data-id={li.id} onClick={function(e){
          e.preventDefault();
          this.props.onClick(e.target.dataset.id);
        }.bind(this)}>
        {li.title}</a></li>)
    }
    return(
      <nav>
        <ul>
          {/* <li><a href="1">HTML</a></li>
          <li><a href="2">CSS</a></li>
          <li><a href="3">JS</a></li> */}
          {listTag}
        </ul>
      </nav>
    );
  }
}

class Article extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    )
  }
}

class App extends Component{
  state = {
    article:{title:"Welcome", desc:"Hello React & Ajax"}
  }
  render(){
    return(
      <div className="App">
        <h1>Web</h1>
        <Nav onClick={function(id){
          fetch(id + ".json")
          .then(function(result){
            return result.json();
          })
          .then(function(json){
            this.setState({
              article:{title:json.title, desc:json.desc}
            })
          }.bind(this));
        }.bind(this)}>

        </Nav>
        <Article
          title = {this.state.article.title}
          desc = {this.state.article.desc}
        ></Article>
      </div>
    )
  }
}

export default App;

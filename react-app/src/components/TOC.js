import React,  { Component } from 'react';

class TOC extends Component{
    render(){
      console.log('TOC render');
      let lists = [];
      let data = this.props.data;

      let i=0;
      while(i < data.length){
        lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}
        data-id = {data[i].id}
        onClick={function(e){
          e.preventDefault();
          /* e.target -->타겟이 된 대상을 가져올 수 있음 */
          this.props.onChangePage(e.target.dataset.id);
        }.bind(this)}>{data[i].title}</a></li>);
        i = i + 1;
      }
      
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

  export default TOC;
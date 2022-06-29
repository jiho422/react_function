import React,  { Component } from 'react';

class Table extends Component{
  render(){
    return (
      <table>
      <th>강의 계획표</th>
      <tr>
        <td>09:00~13:00</td>
        <td>1교시</td>
        <td>HTML</td>
      </tr>
        <th>쉬는 시간</th>
      <tr>
        <td>14:00~17:00</td>
        <td>2교시</td>
        <td>CSS</td>
      </tr>
        <th>쉬는 시간</th>
      <tr>
        <td>17:00~18:00</td>
        <td>3교시</td>
        <td>Bootstrap</td>
      </tr>
        <th>쉬는 시간</th>
      </table>

    );
  }
}

  export default Table;
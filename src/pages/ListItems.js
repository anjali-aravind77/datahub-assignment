import React from 'react';
import './listitems.css';
import { NavLink } from 'react-router-dom';
// import  from 'bootstrap-icons/icons';

const list = [
    {id: 1, customername: "abc1", email: "abc@gmail.com"},
    {id: 2, customername: "abc2", email: "abcd@gmail.com"},
    {id: 3, customername: "abc2", email: "abcd@gmail.com"},
    {id: 4, customername: "abc2", email: "abcd@gmail.com"},
    {id: 5, customername: "abc2", email: "abcd@gmail.com"}
]


export default function ListItems() {
    return (
        <div>
          <div className='serachBar'>
           <div className="search-box">
    <i class="bi bi-search"></i>
    <input type="text" className="input-search" placeholder="Type to Search..." />
  </div>
  <NavLink to="/add" className="buttonList">Add</NavLink>
  </div>
           <table>
  <thead>
    <tr>
      <th>id</th>
      <th>customername</th>
      <th>email</th>
    </tr>
  </thead>
  <tbody>
    {list.map(item => {
      return (
        <tr key={item.id}>
            <td>{item.id}</td>
          <td>{ item.customername }</td>
          <td>{ item.email }</td>
        </tr>
      );
    })}
  </tbody>
</table>
        </div>
    )
}
 
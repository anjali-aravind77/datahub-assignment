
import React from 'react';
import { NavLink } from 'react-router-dom';
import './add.css';
// import ListItems from './pages/ListItems';

export default function Add() {
    return (
        <div>
            <div className='formHeader'>
            <h3>Add Order</h3>
            </div>
            <table className='formTable'>
                <tr className='formRow'>
                    <td className='formCol'>
                    Customer Name
                    </td>
                    <td className='formCol'>
                    Customer Address
                    </td>
                </tr>
                <tr>
                    <td className='formCol'><input name='cName'  className='FormTextBox'/></td>
                    <td className='formCol'><input name='address'  className='FormTextBox'/></td>
                
                </tr>
                <tr>
                    <td className='formCol'>Customer Email</td>
                    <td className='formCol'>Phone Number</td>
                </tr>
                <tr>
                    <td className='formCol'><input name='amount'  className='FormTextBox'/></td>
                    <td className='formCol'><input name='amount'  className='FormTextBox'/></td>
                </tr>
                </table>
                <table className='formTable'>
                <tr>
                    <td className='formCol'>Item & QTY</td>
                </tr>
                <tr>
                    <td className='formCol'>
                    <input name='amount'  className='FormSTextBox' />
                    </td>
                </tr>
                <tr>
                    <td className='formCol'>Amount</td>
                </tr>
                <tr>
                    <td className='formCol'><input name='amount'  className='FormSTextBox'/></td>
                </tr>
            </table>
            <div className='btnDiv'>
            <NavLink to="/listitems" className="buttonAdd">Submit</NavLink>
            
            </div>
            
        </div>
    )
}


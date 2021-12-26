import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const  MenuItems = (props) =>  {
    const {name, subMenus, iconClassName, onClick, to, exact} = props;
    const [expand, setExpand] = useState(false);
    return (
        <li onClick={props.onClick}>
                   <Link exact to={to} onClick={() => setExpand(!expand)} className='menu-list' style={{ textDecoration: 'none' }}> 
                    <div className='menu-icon'>
                        <i className={iconClassName}></i>
                    
                    </div>
                        <span> {name}</span>
                        {/* <div className='downIcon'> */}
                        <i class="bi bi-chevron-down downIcon"></i>
                        {/* </div> */}
                    </Link>
                    {subMenus && subMenus.length > 0 ? (
                        <ul className={`sub-menu ${expand ? "active" : ""}`}>
                         {/* <ul className='sub-menu'> */}
                           
                            {subMenus.map((menu, index) => (
                                <li key={index}>
                                    <Link to={menu.to} className='sub-items' style={{ textDecoration: 'none' }}>{menu.name}</Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </li>
    )
}

export default MenuItems;
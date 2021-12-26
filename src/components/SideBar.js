import React, {useEffect, useState} from 'react'
import MenuItems from './MenuItems';



export const menuItems = [
    {
        name: "Dashboard" ,
        exact: true,
        to : "/",
        iconClassName : 'bi bi-house-door-fill'
    }, {
        name: "Orders",
        exact: true,
        to: "/",
        iconClassName : "bi bi-newspaper",
        subMenus : [{name: "Add Courses", to:"/add"}, {name: "List Orders", to: "/listitems"},],
    }
];

const SideBar = (props) => {
    const [inactive, setInactive] = useState(false);
    // useEffect(() => {
    //     if(inactive)
    // })
    return (
        <div className={`side-bar ${inactive ? "inactive" : ""}`}>
        {/* <div className='side-bar'>  */}
            <h3 className='heading-sb'>
                Datahub
            </h3>
        <div className='menu-items'>
            <ul>
                {
                    menuItems.map((menuItems, index) => 
                        (<MenuItems
                         key= {index} 
                         name= {menuItems.name}
                         exact={menuItems.exact}
                         to= {menuItems.to}
                         subMenus = {menuItems.subMenus || []} 
                         iconClassName = {menuItems.iconClassName}
                         onClick = {(e) => {
                             if(inactive) {
                                 setInactive(false);
                             }
                         }}
                         
                         />))
                }
                
                  {/* <MenuItems 
                    name={"Oders"}
                    subMenus = {[{ name: "Add Orders"}, {name: "List Orders"}]}
                  /> */}
            </ul>

        </div>
           


        </div>
    )
}

export default SideBar;

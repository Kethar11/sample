import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const hoverFunction = (porps)=> {        
    let sidemenu = document.querySelector('.sidemenu-hover');
    if(porps === "addclass"){
        sidemenu.classList.add("toggled")
        sidemenu.classList.remove("sidemenu-hovered");
    }
    else{
        sidemenu.classList.remove("toggled");
        sidemenu.classList.add("sidemenu-hovered");
    }
    
}

const Sidebar = () => {

  return (
    <div className='i-sidemenu'>
      <CDBSidebar 
        textColor="#fff" 
        backgroundColor="transparent"
        className="sidemenu-hover toggled"
        onMouseEnter={()=>{hoverFunction ("removeclass")}}
        onMouseLeave={()=>{hoverFunction ("addclass")}}
        >

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <div exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </div>
            <div exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Services</CDBSidebarMenuItem>
            </div>
            <div exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Speciality</CDBSidebarMenuItem>
            </div>
            <div exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Contact Us</CDBSidebarMenuItem>
            </div>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
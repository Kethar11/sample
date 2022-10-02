import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { useNavigate } from 'react-router-dom';

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

const Sidebar = (props) => {
  const navigate = useNavigate();
const sideBarOnClick = (e)=>{
  console.log("oct2 sideBarOnClick e",e)
  //get id and passed to navigate property

  //if route is already home page scroll upto top if not change route to home
  //if clickable event id is service   change route to service
  //if clickable event id is speciality   change route to speciality
   //if route is already home page scroll upto bottom if not change route to home and scroll to bottom

  // avigate('/home')
}
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
            <div  onClick={(e)=>sideBarOnClick(e)} id="home" exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </div>
            <div onClick={(e)=>sideBarOnClick(e)} id="services" exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Services</CDBSidebarMenuItem>
            </div>
            <div onClick={(e)=>sideBarOnClick(e)} id="speciality" exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Speciality</CDBSidebarMenuItem>
            </div>
            <div onClick={(e)=>sideBarOnClick(e)} id="contact" exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Contact Us</CDBSidebarMenuItem>
            </div>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
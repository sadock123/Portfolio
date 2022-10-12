import React from 'react'
import 'react-pro-sidebar/dist/css/styles.css';
import { ProSidebar,MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar'; 
import 'react-pro-sidebar/dist/css/styles.css';
function Sidebar() {
  return (
    <div className='sidebar'>
    <ProSidebar>
  <SidebarHeader>
   Menu
  </SidebarHeader>
  <SidebarContent>
    
    SADOCK
    
     
  </SidebarContent>
  <MenuItem>Dashboard</MenuItem>
  <MenuItem>Dashboard</MenuItem>
  <SidebarFooter>
    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
  </SidebarFooter>
</ProSidebar>;
    </div>
  )
}

export default Sidebar
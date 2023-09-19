import React from "react"
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { Link } from 'react-router-dom'
import { useSidebarContext } from '../context/sidebar_context'


const Sidebar=()=>{

    const {closeSidebar, isSidebarOpen}=useSidebarContext()

    return(
        <SidebarWrapper className={`bg-white ${isSidebarOpen ? "show-sidebar" : "" }`}>
            <button type="button" className="sidebar-close-btn" onClick={()=>closeSidebar}>
                <MdClose/>
            </button>
            <div className="sidebar-content">
                <h6 className="fs-18">Top Categorias</h6>
                <ul className="sidebar-category">
                    <li>React</li>
                </ul>
            </div>
        </SidebarWrapper>
    )
}

const SidebarWrapper=styled.div`
  position:fixed;
  top:0; 
  right:0 
  width:300px;
  z-index:10;
  height:100%;
  padding:30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  transform: translateX(610%);
  transition: var(--transition);

  &.show-sidebar{
    transform: translateX(100);
  }

  
  

`

export default Sidebar
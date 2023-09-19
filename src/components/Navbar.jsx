import React from 'react'
import styled from 'styled-components'
import {MdMenu} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useSidebarContext } from '../context/sidebar_context'


const Navbar=()=>{

    const {openSidebar}=useSidebarContext()


    return(
        <NavbarWrapper className='bg-white flex'>
            <div className='container w-100'>
                <div className='brand-and-toggler flex flex-between w-100'>
                    <Link to='/' className='navbar-brand text-uppercase ls-1 fw-8'>
                        <span>C</span>ampusAcademic                
                    </Link>

                    <div className='navbar-btns flex'>
                        <Link to='/cart' className='cart-btn'></Link>
                        <button type='button' className='sidebar-open-btn' onClick={()=>openSidebar()}>
                            <MdMenu/>
                        </button>
                    </div>

                </div>
            </div>           
        </NavbarWrapper>
    )
}

const NavbarWrapper=styled.nav`
height: 80px; 
box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px; //sombra

.navbar-brand{
  font-size: 23px;
  span{
    color: var(--clr-orange);
  }
}

.sidebar-open-btn{
  transition: all 300ms ease-in-out;
  &:hover{
    opacity: 0.7;
  }
}
`;

export default Navbar
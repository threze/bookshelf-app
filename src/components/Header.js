import React, { useState } from 'react'
import { 
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
   } from 'reactstrap'

   import { Link } from 'react-router-dom'

const Header = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => { setOpen(!open) }
  
    return(
      <div>
        <Navbar color='dark' light expand='md'>
          <NavbarBrand className="text-white" tag={Link} to='/'>Bookshelf APP</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={open} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>              
                <NavLink className='btn btn-secondary text-white' tag={Link} to='/livros'>Livros</NavLink>
              </NavItem>
              <NavItem>              
                <NavLink className='btn btn-secondary text-white' tag={Link} to='/generos'>Gêneros</NavLink>
              </NavItem>
            </Nav>
          </Collapse>      
       </Navbar>
      </div>      
    )
  }

  export default Header
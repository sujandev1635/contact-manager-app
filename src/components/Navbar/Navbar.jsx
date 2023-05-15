import React from 'react'
import { Link } from 'react-router-dom'
import ContactList from '../contact/ContactList/ContactList'

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className='navbar navbar-dark navbar-color navbar-expand-sm'>
        <div className='container'>
          <Link to={'/'} className='navbar-brand'>
            <i className='fa fa-mobile text-warning'/>Contact <span className='text-warning'> Manager</span></Link>
        </div>
      </nav>
      <ContactList/>
    </React.Fragment>
  )
}

export default Navbar
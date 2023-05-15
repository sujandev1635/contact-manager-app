import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ContactList from './components/contact/ContactList/ContactList'
import AddContact from './components/contact/AddContact/AddContact'
import ViewContact from './components/contact/ViewContact/ViewContact'
import EditContact from './components/contact/EditContact/EditContact'
const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contact/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/add'} element={<AddContact/>}/>
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
      </Routes>

    </React.Fragment>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './components/auth/private_route'
import Home from './screens/home';
import Register from './screens/auth/register';
import Login from './screens/auth/login';
import NotesIndex from './screens/notes/index';
import UserEdit from './screens/users/edit';

const appRoutes = () => (
   <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/' element={<PrivateRoutes />}>
          <Route exact path='/notes' element={<NotesIndex/>} />
          <Route exact path='/users/edit' element={<UserEdit/>} />
        </Route>
      </Routes>
    </Router>
)

export default appRoutes;
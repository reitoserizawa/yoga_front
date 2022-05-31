import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Instructors from './components/Instructors'
import ClassSchedule from './components/ClassSchedule'
import Form from './components/Form'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ClassSchedule />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/instructors'>
          <Instructors />
        </Route>
        <Route exact path='/form'>
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;




import React from 'react';
import { useState } from 'react';
import Display from './Display';
import { useDispatch } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';



const SideBar = () => {
  const dispatch = useDispatch();




  return (
    <div>
      <div id="sidebar">
        <h2>SideBar</h2>
        <button onClick={() => dispatch({ type: 'Home' })}>Home</button><br /><br />
        <button onClick={() => dispatch({ type: 'Add' })}>Add Employee</button><br /><br />
        <button onClick={() => dispatch({ type: 'Update' })}>Update Employee</button><br /><br />
        <button onClick={() => dispatch({ type: 'Delete' })}>Delete Employee</button><br></br>
      </div>
      
    </div>
  );
}

export default SideBar;

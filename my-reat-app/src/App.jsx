import { useState } from 'react'
import './App.css'
import welcome from './component/functional component'
import welcoome from './component/functional component'
import student from './component/student'
function App() {

  return (
    <>
      <welcome />
      <welcoome />
      <student studentname="darshit"/>
    </>
  )
}

export default student;

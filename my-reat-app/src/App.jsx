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

      <student name="Darshit" age={21}/>

    </>
  )
}

export default student;

import { useState } from 'react'
import './App.css'
import welcome from './component/functional component'
import welcoome from './component/functional component'
import student from './component/student'
import counter from './counter/counter'

function App() {

  return (
    <>
      <welcome />
      <welcoome />

      <student name="Darshit" age={21}/>
      <counter/>
    </>
  )
}

export default counter;

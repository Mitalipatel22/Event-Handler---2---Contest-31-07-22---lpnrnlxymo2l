import React, { useState } from 'react'

const App = () => {

  
  const handleClick = (event) =>{
    console.log('Button id is:-button-a' )

  }
const handleClickTwo = (event) =>{

  console.log('Button id is:-button-b' )
}

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button onClick={handleClick} id="button-a">Button A</button>
      <button onClick={handleClickTwo} id="button-b">Button B</button>
    </div>
  )
}
export default App;

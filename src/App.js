import React from 'react';
import Languagues from './Components/languagues';

function App() {
  return (
      <div className='App'>

        <h1 container-title>Estos son mis skills</h1>
        <div className='container-languagues-box'>

        <Languagues
        namelang='HTML'
        linklang=''
        image='html'/>

        <Languagues
        namelang='CSS'
        linklang=''
        image='css'/>

        <Languagues
        namelang='JAVASCRIPT'
        linklang=''
        image='javascript'/>

        <Languagues
        namelang='REACT'
        linklang='Click aquí'
        image='react'/>

        <Languagues
        namelang='JAVA'
        linklang='Click aquí'
        image='java'/>
        </div>
      </div>

  );
}

export default App;

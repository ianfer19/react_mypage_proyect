import React from 'react'
import '../styles/languagues.css';

function Languagues (props) {
  return (
    <div className='container-languagues'> 
        <div className ='container-text'>  
        <p className='name-languagues' >{props.namelang}</p>
        </div>
        <img className='image-languagues'src={require(`../images/languague-${props.image}.png`)} />
        <div className='container-text'>
        <a className= 'link-languagues' href="">{props.linklang}</a>
        </div>     
        
        

    </div>
  )
} 

export default Languagues

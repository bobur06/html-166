import React from 'react'
import Navbar from './compon/Navbar'
import { NavLink, Outlet } from 'react-router-dom'
import { Container } from './style'



const Root = () => {
  return (
    <>
     <header>
      <Container>
        <div >
          <h1 style={{color:'red'}}>MEIDIA</h1>
          <h1 style={{color:'black'}}>PARK</h1>
          <NavLink to='/about'></NavLink>
        </div>
        <button>Catalog</button>
        <input type="text" />
      </Container>
    </header>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default Root
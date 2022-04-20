import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/user'>User</Link>
          </li>
        </ul>
      </nav>

      <Routes>

        <Route path='/about' element={<About/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/' element={<Home/>} />

        
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}


function Home()  {
return (
  <div>
    Exemplo HOME <br/>
    Este é o Exemplo HOME
  </div>
) 
}

function About() {
  return(
    <div>
      Exemplo ABOUT <br/>
      Este é o Exemplo ABOUT
    </div>
  )
}

function User () {
  return (
    <div>
      Exemplo USER <br/>
      Este é o Exemplo USER
    </div>
  )
}
export default App;

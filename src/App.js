import React from 'react'
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import Footer from './components/inc/Footer'
import Navbar from './components/inc/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Services from './components/pages/Services'
import './App.css'

function App(){


return(
<Router>
  
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
  
</Router>
)


}     
    
      
      
    
  



export default App;

import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from'./components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from'./components/Navbar'
import NotFound from'./components/NotFound'
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
            <Routes>
              <Route path="/"element={<Home/>}/>
              <Route path="/about"element={<About/>}/>
              <Route path="/contact"element={<Contact/>}/>
              <Route path="*" element={<Not found/>}/>

            </Routes>
      </BrowserRouter>
    </div>
  )
} 
export default App


// import Events from'./Events'
// function App(){
//   return(
//     <div>
//       <h1>Events</h1>
//       <Events/>
//     </div>
//   )
// }
// export default App

/*import ClassComponent from "./Classcomponent"
import ClassComponent1 from"./Classcomponent1"
function Demo(){
  return(
        <section>
            <ClassComponent/>
            <img src="https://i.pinimg.com/736x/31/15/7c/31157c69745403bc82f784847fbd4567.jpg"width="22%"alt="nature"/>
            <p>hello fellows</p>
            <h1>This is usha sri</h1>
             <ClassComponent1/>
        </section> 
  )
}
export default Demo*/

// import FunctionPropExample from './FunctionPropExample'
//  function App(){
//   return(
//       <div>
//        <h1>This is about props example</h1>
//       {/* <PropsExample name="usha"age="19"/>
//       <PropsExample name="arifa" age="5"/> 8
//      < FunctionPropExample framework="react"number="23"/>
//       < FunctionPropExample framework="html"number="2003"/>
//       </div>
//     )
//  }
// export default App
// import StateExample from './StateExample'
// function App(){
//   return(
//     <div>
//     <StateExample/>
 
//     </div>
//   )

// }
// export default App

 
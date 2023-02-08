import Home from "./pages/Home"; 
import {Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./pages/Users"; 
import './App.css';
import Parentreg from "./pages/Parentreg";
import Managementreg from "./pages/Managementreg";
import Accredator from "./pages/Accredator";
import Checkmq from "./pages/Checkmq";
import Studentreg from "./pages/Studentreg";
import Teacherreg from "./pages/Teacherreg";
import Top10 from "./pages/Top10";
import MQquiz from "./pages/MQquiz";
import Response from "./pages/Response";
import Accredatorreg from "./pages/Accredatorreg";
import Result from "./pages/Result";
function App() {
  return(
  <div>
    <Header/>
    <Routes>
     
       <Route path='/' element={<Home/ >}></Route>
       
      <Route path='Users' element={<Users/ >}></Route>
      
      <Route path='Teacherreg' element={<Teacherreg/ >}></Route>
      
      <Route path='Studentreg' element={<Studentreg/>}></Route>
      <Route path='Managementreg' element={<Managementreg/ >}></Route>
      <Route path='Parentreg' element={<Parentreg/ >}></Route>
      <Route path='Accredator' element={<Accredator/ >}></Route>
      <Route path='Checkmq' element={<Checkmq/ >}></Route>
      <Route path='Top10' element={<Top10/ >}></Route>
      <Route path='MQquiz' element={<MQquiz/ >}></Route>
      <Route path='Accredatorreg' element={<Accredatorreg/ >}></Route>
      <Route path='Response' element={<Response/ >}></Route>
      <Route path='Result' element={<Result/ >}></Route>
   {/* <Header/>
   <Footer/> */}
   </Routes>
   <Footer/> 
  </div>
  );
}

export default App;

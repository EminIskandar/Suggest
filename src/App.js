import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home'
import {Main} from './theme/components'

function App() {
  return (
    <BrowserRouter>
      <Main> 
        <Routes> 
            <Route path="/" element={<Home />} />  
            <Route path="*" element={<div>Page not found</div>} />  
        </Routes>
      </Main> 
    </BrowserRouter>
  );
}

export default App;

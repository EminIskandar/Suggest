import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home'

function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path="/" element={<Home />} />  
          <Route path="*" element={<div>Page not found</div>} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

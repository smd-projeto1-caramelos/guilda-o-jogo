import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Introducao from './pages/Introducao';
import Configuracoes from './pages/Configuracoes';

function App() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route 
          index 
          element={
            <Introducao 
              setName={ setName }
              setGender={ setGender }/>
          } 
        />
        
        <Route 
          path="/configuracoes" 
          element={
            <Configuracoes 
              name={ name } 
              gender={ gender }
            /> 
          } 
        />
        
        <Route 
          path="*" 
          element={
            <Introducao />
          } 
        />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Introducao from './pages/Introducao';
import AcudeEncantado from './pages/AcudeEncantado';
import EstradaDosCaes from './pages/EstradaDosCaes';
import Configuracoes from './pages/Configuracoes';

function App() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState({ "barbaro": 0, "guerreiro": 0, "bardo": 0, "sabio": 0});

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
          path="/acude"
          element={
            <AcudeEncantado 
              result={ result }
              setResult={ setResult }/>
          }
        />

        <Route
          path="/estrada"
          element={
            <EstradaDosCaes />
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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Introducao from './pages/Introducao';
import AcudeEncantado from './pages/AcudeEncantado';
import EstradaDosCaes from './pages/EstradaDosCaes';
import BibliotecaEncantada from './pages/BibliotecaEncantada';
import PalacioDasArtes from './pages/PalacioDasArtes';
import RefeitorioMagico from './pages/RefeitorioMagico';
import CampoOrquideas from './pages/CampoOrquideas';

function App() {
  const [setName] = useState('');
  const [setGender] = useState('');
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
          path="/acude"
          element={
            <AcudeEncantado 
              result={ result }
              setResult={ setResult }
            />
          }
        />

        <Route
          path="/estrada"
          element={
            <EstradaDosCaes 
              result={ result }
              setResult={ setResult }
            />
          }
        />

        <Route
          path="/biblioteca"
          element={
            <BibliotecaEncantada 
              result={ result }
              setResult={ setResult }
            />
          }
        />

        <Route
          path="/palacio"
          element={
            <PalacioDasArtes 
              result={ result }
              setResult={ setResult }
            />
          }
        />

        <Route
          path="/refeitorio"
          element={
            <RefeitorioMagico 
              result={ result }
              setResult={ setResult }
            />
          }
        />

        <Route
          path="/campo"
          element={
            <CampoOrquideas 
              result={ result }
              setResult={ setResult }
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
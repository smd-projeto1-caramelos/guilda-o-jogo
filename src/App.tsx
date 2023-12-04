import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getById, listAll }  from './database/Database';

import Message from './Message';
import BotaoConfiguracoes from './components/BotaoConfiguracoes';
import BotaoInfo from './components/BotaoInfo';
import CaixaInput from './components/InputNome';
import CaixaSelect from './components/InputSelect';
import FaixaTitulo from './components/FaixaTitulo';
import Introducao from './pages/Introducao';
import Configuracoes from './pages/Configuracoes';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Introducao />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
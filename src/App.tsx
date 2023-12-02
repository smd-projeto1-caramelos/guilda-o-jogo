import Message from './Message';
import { getById, listAll }  from './database/Database';
import BotaoConfiguracoes from './components/BotaoConfiguracoes';
import BotaoInfo from './components/BotaoInfo';
import CaixaInput from './components/InputNome';
import CaixaSelect from './components/InputSelect';
function App() {
  return (
  <>
    <div><Message></Message></div>
    <div><p>{getById(0).data[0].data}</p></div>
    <BotaoConfiguracoes />
    <BotaoInfo />
    <CaixaInput />
    <CaixaSelect />
    
    </>
  );
}

export default App;
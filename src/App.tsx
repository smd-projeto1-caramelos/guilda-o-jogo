import Message from './Message';
import { getById, listAll }  from './database/Database';
import BotaoConfiguracoes from './components/BotaoConfiguracoes';
import BotaoInfo from './components/BotaoInfo';
import CaixaInput from './components/InputNome';
import CaixaSelect from './components/InputSelect';
import FaixaTitulo from './components/FaixaTitulo';
import { ContainerTexto } from './components/CaixaTexto/style';
import Cenarios from './components/Cenarios';
function App() {
  return (
  <>
    <div><Message></Message></div>
    <div><p>{getById(0).data[0].data}</p></div>
    <BotaoConfiguracoes />
    <BotaoInfo />
    <Cenarios />
    <CaixaInput />
    <CaixaSelect />
    <FaixaTitulo />
    <ContainerTexto>
      <p>No meio do caminho, você encontra um Refeitório. Com fome mas com
        poucas moedas, você se aproxima e encontra um peregrino perdido que
está pedindo ajuda para conseguir uma refeição. O que você faz?
      </p>
    </ContainerTexto>
    
    </>
  );
}

export default App;
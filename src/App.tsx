import Message from './Message';
import { getById, listAll }  from './database/Database';

function App() {
  return <>
    <div><Message></Message></div>
    <div><p>{getById(0).data[0].data}</p></div>
    </>;
}

export default App;
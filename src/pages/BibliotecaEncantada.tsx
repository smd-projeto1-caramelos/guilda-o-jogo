import Image from "../components/Image";
import Banner from "../components/Banner";
import TextBox from "../components/TextBox";
import Button from "../components/Button";

import { getById } from "../database/Database";

import { useNavigate } from 'react-router-dom';

function BibliotecaEncantada({ result, setResult}: any) {
  // navegacao
  const navigate = useNavigate();
  const nav = () => { navigate("/palacio"); };

  // escolhas
  const selectOption1 = () => { selectOption(1) }
  const selectOption2 = () => { selectOption(2) }
  const selectOption3 = () => { selectOption(3) }
  const selectOption4 = () => { selectOption(4) }
  const selectOption = (opt: number) => {
    // logica de pontuacao
    if (opt == 1) { result.sabio = result.sabio + 1; setResult(result); }
    if (opt == 2) { result.bardo = result.bardo + 1; setResult(result); }
    if (opt == 3) { result.guerreiro = result.guerreiro + 1; setResult(result); }
    if (opt == 4) { result.barbaro = result.barbaro + 1; setResult(result); }
    
    // navegacao
    nav();
  }

  return(
    <>
      <Image className="background-image background-image-progressao progressao-tres" />
      <Image className="background-image background-image-cenario biblioteca-encantada" />
      <Banner text="BIBLIOTECA ENCANTADA" className="banner-cenario" />
      <TextBox text={ getById("text", 3) } className="textarea textarea-cenario" />
      <Button text={ getById("buttons", 9) } onclick={ selectOption1 } className="button button-escolha-um" />
      <Button text={ getById("buttons", 10) } onclick={ selectOption2 } className="button button-escolha-dois" />
      <Button text={ getById("buttons", 11) } onclick={ selectOption3 } className="button button-escolha-tres" />
      <Button text={ getById("buttons", 12) } onclick={ selectOption4 } className="button button-escolha-quatro" />
    </>
  );
}

export default BibliotecaEncantada;
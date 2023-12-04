import Image from "../components/Image";
import Banner from "../components/Banner";
import TextBox from "../components/TextBox";
import Button from "../components/Button";

import { getById } from "../database/Database";

import { useNavigate } from 'react-router-dom';

function PalacioDasArtes({ result, setResult}: any) {
  // navegacao
  const navigate = useNavigate();
  const nav = () => { navigate("/refeitorio"); };

  // escolhas
  const selectOption1 = () => { selectOption(1) }
  const selectOption2 = () => { selectOption(2) }
  const selectOption3 = () => { selectOption(3) }
  const selectOption4 = () => { selectOption(4) }
  const selectOption = (opt: number) => {
    // logica de pontuacao
    if (opt == 1) { result.guerreiro = result.guerreiro + 1; setResult(result); }
    if (opt == 2) { result.bardo = result.bardo + 1; setResult(result); }
    if (opt == 3) { result.sabio = result.sabio + 1; setResult(result); }
    if (opt == 4) { result.barbaro = result.barbaro + 1; setResult(result); }
    
    // navegacao
    nav();
  }

  return(
    <>
      <Image url="src/assets/progressao-4.png" className="background-image background-image-progressao" />
      <Image url="src/assets/palacio-artes.png" className="background-image background-image-cenario" />
      <Banner text="PALÁCIO DAS ARTES DO ICA" className="banner-cenario" />
      <TextBox text={ getById("text", 4) } className="textarea textarea-cenario" />
      <Button text={ getById("buttons", 13) } onclick={ selectOption1 } className="button button-escolha-um" />
      <Button text={ getById("buttons", 14) } onclick={ selectOption2 } className="button button-escolha-dois" />
      <Button text={ getById("buttons", 15) } onclick={ selectOption3 } className="button button-escolha-tres" />
      <Button text={ getById("buttons", 16) } onclick={ selectOption4 } className="button button-escolha-quatro" />
    </>
  );
}

export default PalacioDasArtes;
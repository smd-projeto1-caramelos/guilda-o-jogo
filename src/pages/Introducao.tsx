import Banner from "../components/Banner";
import Logo from "../components/Logo";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import Select from "../components/Select";
import Input from "../components/Input";

import { getById, listAll } from "../database/Database";

function Introducao({ setName, setGender }: any) {
  return(
    <>
      <Logo />
      <Banner text="Introdução" />
      <TextBox text={ getById("text", 0) } />
      <Input placeholder={ "Seu Nome" } onchange={ setName }/>
      <Select options={ listAll("pronouns") } placeholder="Pronomes" onchange={ setGender }/>
      <Button text={ getById("buttons", 0) } url="/configuracoes" />
    </>
  );
}

export default Introducao;
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import Select from "../components/Select";
import Input from "../components/Input";

import { getById, listAll } from "../database/Database";

import { useNavigate } from 'react-router-dom';

function Introducao({ setName, setGender }: any) {
  const navigate = useNavigate();

  const nav = () => { navigate("/acude"); };

  return(
    <>
      <Logo />
      <Banner text="Introdução" className="banner banner-introducao" />
      <TextBox text={ getById("text", 0) } className="textarea textarea-introducao" />
      <Input placeholder={ "Seu Nome" } onchange={ setName } />
      <Select options={ listAll("pronouns") } placeholder="Pronomes" onchange={ setGender } />
      <Button text={ getById("buttons", 0) } onclick={ nav } className="button button-introducao" />
    </>
  );
}

export default Introducao;
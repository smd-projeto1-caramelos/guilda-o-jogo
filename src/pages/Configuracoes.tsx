function Configuracoes({ name, gender }: any) {
  return(
    <>
      <h1>Configurações</h1>
      <p>Seu nome é:{ name }</p>
      <p>Seus pronomes são: { gender }</p>
    </>
  );
}

export default Configuracoes;
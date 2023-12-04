function Input({ placeholder, onchange }: any) {

  return(
    <>
      <input type="text" placeholder={ placeholder } className="input-name" onChange={ e => onchange(e.target.value)}></input>
    </>
  );
}

export default Input;
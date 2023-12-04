function Button({ text, onclick, className }: any) {
  return(
    <>
      <button type="submit" className={ className } onClick={ onclick }>{ text }</button>
    </>
  );
}

export default Button;
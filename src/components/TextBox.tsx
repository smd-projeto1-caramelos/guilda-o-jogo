function TextBox({ text, className }: any) {
  return(
    <>
      <textarea className={ className } value={ text } readOnly></textarea>
    </>
  );
}

export default TextBox;
function TextBox({ text }: any) {
  return(
    <>
      <textarea className="textarea" value={ text } readOnly></textarea>
    </>
  );
}

export default TextBox;
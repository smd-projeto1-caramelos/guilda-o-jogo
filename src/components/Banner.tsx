function Banner({ text, className }: any) {
  return(
    <>
      <h1 className={ className }><i>{ text }</i></h1>
    </>
  );
}

export default Banner;
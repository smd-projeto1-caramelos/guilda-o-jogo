function Image({ url, className }: any) {
  return(
    <>
      <img className={ className } src={ url } />
    </>
  );
}

export default Image;

function Select({ options, placeholder, onchange }: any) {
  const createOptions = options.map((opt: any) => {
    return(<option className="option" value={opt.id}>{opt.descr}</option>);
  });

  return(
    <>
      <select className="select-gender" onChange={ e => onchange(e.target.value) }>
        <option className="option" disabled selected value="">{ placeholder }</option>
        { createOptions }
      </select>
    </>
  );
}

export default Select;
import { useNavigate } from 'react-router-dom';

function Button({ text, url }: any) {
  const navigate = useNavigate();

  const nav = () => { navigate(url); };

  return(
    <>
      <button type="submit" className="button" onClick={ nav }>{ text }</button>
    </>
  );
}

export default Button;
import styled from 'styled-components';

export const Botao = styled.button`
  background-image: url('src/assets/background-botao.svg');
  background-repeat: no-repeat, repeat;
  background-size: 100%;
  font-size: 16px;
  border-radius: 5px;

`
export const TextoBotao = styled.span`
  display: inline-block;
  margin-left: 10px;
`
export const ContainerBotao = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;
  cursor: pointer;
  margin: 20px 0px;  
`
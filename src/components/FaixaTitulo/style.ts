import styled from "styled-components"

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    transition: all 0.1s ease-in;
    cursor: pointer;
    margin: 20px 0px;
    background-image: url('src/assets/faixa.svg');
    align-items: center;
    background-repeat: no-repeat;
`
export const BannerTitulo = styled.h2`
    color: white;
    margin: 0.8rem 0rem;
    font-style: italic;
`

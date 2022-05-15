import styled from 'styled-components';

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100vh;
        width: 101vw;
        background-color: #E5E5E5;
`;

export const TitleContainer = styled.div` 
`;

export const H2 = styled.h2` 
    @media ${(props) => props.theme.breakpoints.sm} { 
        font-size: 1rem;
        width: 100%;
    }
`;

export const H1 = styled.h1` 
    display: flex;
    justify-content: center;
    font-size: 4rem;
    margin-top: -1.5rem;
    @media ${(props) => props.theme.breakpoints.sm} { 
        margin-top: 1rem;
        font-size: 3rem;
    }
`;

export const P = styled.p` 
    font-size: 2rem;
    font-weight: bold;
    margin-left: 1rem;

    @media ${(props) => props.theme.breakpoints.sm} { 
        font-size: 0.9rem;
        margin-top: 2rem;
        margin-left: 1rem;
        font-weight: bold; 
    }
`;

export const TitleResult = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const InputContainer = styled.div`
`;

export const DivInputs = styled.div` 
    position: relative;
`;  

export const BtnIcon = styled.button`
    position: absolute;
    z-index: 0;
    top: 10%;
    border: none;
    background: transparent;
    outline: none;
    right: 1rem;

    @media ${(props) => props.theme.breakpoints.sm} { 
        margin-right: 1rem;
        right: 0;
    }
`;

export const Input = styled.input` 
    width: 15vw;
    height: 5vh;
    border: 2px solid gray;
    margin-bottom: 1rem;
    border-color: blue;

    @media ${(props) => props.theme.breakpoints.sm} { 
        width: 10rem;
        height: 2rem;
    }

    &:focus-within {
        border: 5px solid lightblue;
    }
`;

export const Calculate = styled.button` 
    width: 15.5vw;
    height: 5vh;
    color: black;
    background-color: #E5E5E5;

    &:hover {
        background-color: orange;   
    }

    @media ${(props) => props.theme.breakpoints.sm} { 
        width: 10.5rem;
        height: 2rem;
    }
`
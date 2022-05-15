import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer` 
    Background-color: #fff;
    position: fixed;
    width: 101vw;
    height: 5vh;
    bottom: 0;
    
    @media ${(props) => props.theme.breakpoints.sm} { 
        bottom: 0rem;
        position: fixed;
    }
`;

export const Links = styled.div` 
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
`;

export const LinksContainer = styled.div` 
    display: flex;
    gap: 1rem;
`

export const Styledlink = styled(Link)`
    color: black;
`
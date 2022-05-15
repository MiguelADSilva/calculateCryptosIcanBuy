import React from 'react'
import { FooterContainer, Links, LinksContainer } from './FooterStyle'
import { Styledlink } from './FooterStyle'

const Footer = () => {

  return (
    <FooterContainer>
      <Links>
        <LinksContainer>
          <Styledlink to="/">
            <h3>Home</h3>
          </Styledlink>
          <Styledlink to="/profit">
            <h3>Profit</h3>
          </Styledlink>
        </LinksContainer>
      </Links>
    </FooterContainer>
  )
}

export default Footer
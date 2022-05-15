import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { Select } from 'antd';
import { LanguageContext } from '../../contexts/LanguageContexts';
/* import {engLanguage} from '../../constants/textsEnumsEnglish';
import {ptLanguage}  from '../../constants/textsEnumsPortugues'; */

import 'antd/dist/antd.css';

import { 
  TitleContainer, 
  H1, H2, P, 
  TitleResult, 
  InputContainer,
  Container,
  Input,
  DivInputs,
  BtnIcon,
  Calculate,
  SelectLanguage,
  LanguageContainer,
  Button
 } from './ProfitStyles'

const Profit = () => {

  const { languageList } = useContext(LanguageContext);

  const [profit, setProfit] = useState(0);
  const [cryptoValue, setCryptoValue] = useState(0);
  const [sellCryptoValue, setSellCryptoValue] = useState(0);
  const [cryptosIHave, setCryptosIHave] = useState(0);
  const [language, setLanguage] = languageList;

  const languageValues = [
    "Português", "Inglês"
  ]

  const { Option } = Select;

  const cryptoValueChange = (e) => { 
    return setCryptoValue(e.target.value);
  }

  const sellCryptoValueChange = (e) => { 
    return setSellCryptoValue(e.target.value);
  }

  function clickToSelectLanguage(e) { 
    setLanguage(e.target.value);
  }

  const cryptosIHaveChange = (e) => { 
    return setCryptosIHave(e.target.value);
  }

  function calculateProfit() { 
    return setProfit(cryptosIHave * (sellCryptoValue - cryptoValue));
  }

  return (
    <Container>
      <TitleContainer>
        <H2>How much I won?</H2>
        <TitleResult>
          <H1>{profit}€</H1><P sm>Profit</P>
        </TitleResult>
      </TitleContainer>
      <InputContainer>
          <DivInputs>
            <Input 
              id="inputCash" 
              name="inputCash" 
              placeholder="Price crypto when you buy"
              onChange={cryptoValueChange}
              >
            </Input>
            <BtnIcon>
              <FontAwesomeIcon icon={faSackDollar} aria-hidden="true"/>
            </BtnIcon>
          </DivInputs>
          <DivInputs>
            <Input 
              id="inputCash" 
              name="inputCash" 
              placeholder="How much you earn when you sell"
              onChange={sellCryptoValueChange}
              >
              </Input>
            <BtnIcon>
              <FontAwesomeIcon icon={faSackDollar} aria-hidden="true"/>
            </BtnIcon>
          </DivInputs>
          <DivInputs>
            <Input 
              id="inputCash" 
              name="inputCash" 
              placeholder="Cryptos I have"
              onChange={cryptosIHaveChange}
              >
              </Input>
            <BtnIcon>
              <FontAwesomeIcon icon={faSackDollar} aria-hidden="true"/>
            </BtnIcon>
          </DivInputs>
          <Calculate onClick={calculateProfit}>Calculate</Calculate>
      </InputContainer>
    </Container>
  )
}

export default Profit
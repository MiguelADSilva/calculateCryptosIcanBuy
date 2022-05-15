import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { LanguageContext } from '../../contexts/LanguageContexts';

import millify from 'millify';

import { 
  TitleContainer, 
  H1, H2, P, 
  TitleResult, 
  InputContainer,
  Container,
  Input,
  DivInputs,
  BtnIcon,
  Calculate
} from './MainPageStyles';

const MainPage = () => {
  const [totalCryptos, setTotalCryptos] = useState(0);
  const [myMoney, setMyMoney] = useState(0);
  const [cryptoPrice, setCryptoPrice] = useState(0);

  const { languageList } = useContext(LanguageContext);

  const [language, setLanguage] = languageList;

  const languageValues = [
    "Português", "Inglês"
  ]

  const { Option } = Select;

  const myMoneyChange = (e) => { 
    return setMyMoney(e.target.value);
  }

  const cryptoPriceChange = (e) => { 
    return setCryptoPrice(e.target.value);
  }

  const clickToSelectLanguage = (e) => { 
    console.log(e.target.value);
  }

  function calculatePrice() { 
    return setTotalCryptos(myMoney / cryptoPrice);
  }

  return (
    <Container>
      <TitleContainer>
        <H2>Total Cryptos you can buy:</H2>
        <TitleResult>
          <H1>{millify(totalCryptos, { precision: 1})}</H1><P sm>Cryptos</P>
        </TitleResult>
        <span>Exact Number {totalCryptos}</span>
      </TitleContainer>
      <InputContainer>
          <DivInputs>
            <Input 
              id="inputCash" 
              name="inputCash" 
              placeholder="Your cash to Invest"
              onChange={myMoneyChange}
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
              placeholder="Crypto Price"
              onChange={cryptoPriceChange}
              >
              </Input>
            <BtnIcon>
              <FontAwesomeIcon icon={faSackDollar} aria-hidden="true"/>
            </BtnIcon>
          </DivInputs>
          <Calculate onClick={calculatePrice}>Calculate</Calculate>
      </InputContainer>
    </Container>
  )
}

export default MainPage
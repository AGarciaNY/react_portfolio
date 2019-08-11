import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width:100%;
  background: linear-gradient(transparent,#484848,black,black);
  color:white;
`;

const HeadingCon = styled.div`
  text-align: center;
`;

const Header = styled.h1`
  font-size: 24px;
  margin:0;
  padding:0;
`;

const ContactInformationContainer = styled.li`
  height:40px;
  display: flex;
  flex-direction: row;
`;

const Contact = styled.h1`
  font-size: 18px;
  margin: 0;
`;
const ContactHolder = styled.ul`
  list-style-type: none;
`;
const Footer=()=>(
    <Container>
      <HeadingCon>
        <Header>More Informtion</Header>
      </HeadingCon>
      <div>
          <Header>Contact Informtion Here</Header>
          <ContactHolder>
            <ContactInformationContainer>
              <img src="/img" alt=""/>
              <Contact>Aldairgarcia360@gmail.com</Contact>
            </ContactInformationContainer>
            <ContactInformationContainer>
              <img src="/img" alt=""/>
              <Contact >AGarciaNY</Contact>
            </ContactInformationContainer>
          </ContactHolder>
      </div>
    </Container>
);

export default Footer;

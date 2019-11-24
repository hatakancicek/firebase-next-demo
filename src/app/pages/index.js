import React from "react";
import Page from "../components/page";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  padding: 1.5em;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  align-self: stretch;
  font-weight: bold;
  line-height: 1.15;
  font-size: 2.5rem;
  text-align: center;
  color: #ffffff;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  max-width: 450px;
  text-align: center;
  margin-top: 1.5em;
  color: #eeeeee;
  line-height: 1.3;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 2em;
  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

const Home = () => {
  return (
    <Page>
      <Wrapper>
        <Title>Wellcome to Next Firebase Demo!</Title>
        <Description>
          This site has been created to demonstrate how a Next aplication can be
          served with cloud functions!
        </Description>
        <Image src="/static/logo.svg" />
      </Wrapper>
    </Page>
  );
};

Home.getInitialProps = async function() {
  return {};
};

export default Home;

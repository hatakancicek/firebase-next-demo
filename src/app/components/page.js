import React from "react";
import Head from "./head";
import styled from "styled-components";

const Root = styled.div`
  width: 100vw;
  display: flex;
  overflow-y: auto;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  margin: auto;
  width: calc(100vw - 2em);
  max-width: 1100px;
  align-self: stretch;
  flex-direction: column;
`;

function Page({ title, description, children }) {
  return (
    <Root>
      <Head title={title} description={description} />
      <Main>{children}</Main>
    </Root>
  );
}

export default Page;

import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Heading>
      <h1>Kalkulátor čisté hmotnosti🔩</h1>
    </Heading>
  );
}

const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h1 {
    font-size: 4em;
    width: 100%;
    text-align: center;
  }

  @media only screen and (max-width: 575px) {
    h1 {
      font-size: 3em;
    }
  }
`;

export default Header;

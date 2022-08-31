import React from "react";
import styled from "styled-components";

function ButtonSection(props) {
  return (
    <ButtonContainer>
      <FinishButton onClick={props.handleResult}>=</FinishButton>
      <AddNewButton onClick={props.handleAddition}>+</AddNewButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const FinishButton = styled.div`
  border: none;
  width: 50%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  font-weight: bold;
  border-radius: 20px 0px 0px 20px;
  color: white;
  background: #52a6ff;
`;

const AddNewButton = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  font-weight: bold;
  border-radius: 0px 20px 20px 0px;
  color: white;
  background: #5fd068;
`;
export default ButtonSection;

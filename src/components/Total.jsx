import React from "react";
import styled from "styled-components";

function Total(props) {
  return (
    <Result>
      <p className="result-text">Celkem:</p>
      <ResultColumn>
        <p className="result-number">{props.result} kg</p>
        <p className="result-number">{props.resultG} g</p>
      </ResultColumn>
    </Result>
  );
}

const Result = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 0.25em;
  padding-top: 0.25em;
  border-top: 2px solid black;
  .result-text {
    width: 60%;
    font-weight: bold;
    margin-left: 10px;
  }
  .result-number {
    font-weight: bold;
  }
`;

const ResultColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 10px;
  @media only screen and (max-width: 575px) {
    font-size: 0.9em;
  }
`;

export default Total;

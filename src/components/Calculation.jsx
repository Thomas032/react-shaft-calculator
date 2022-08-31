import React from "react";
import styled from "styled-components";

function Calculation(props) {
  return (
    <React.Fragment>
      <Sign>{props.k === 1 ? "+" : "-"}</Sign>
      <CalcItem>
        <span className="text">
          [(π • {props.circumference / 1000}
          <sup>2</sup>) • {props.length / 1000}] • {props.density}
        </span>
        <span className="equal">=</span>
        <span className="result">
          <p>{props.total} kg</p>
        </span>
      </CalcItem>
    </React.Fragment>
  );
}

const CalcItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.5em;
  .text {
    height: 100%;
    text-align: left;
    margin-left: 10px;
  }
  .equal {
    margin-left: auto;
    margin-right: auto;
  }
  .result {
    margin-left: auto;
    margin-right: 10px;
    text-align: left;
  }

  @media only screen and (max-width: 575px) {
    font-size: 0.6em;
  }
`;

const Sign = styled.span`
  margin-left: auto;
  margin-right: 10px;
  &:first-child {
    display: none;
  }
`;

export default Calculation;

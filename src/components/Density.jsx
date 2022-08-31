import React from "react";
import styled from "styled-components";

function Density() {
  return (
    <React.Fragment>
      <FormRow>
        <p>
          Density [kg·m<sup>-3</sup>]
        </p>
        <input type="number"></input>
      </FormRow>
    </React.Fragment>
  );
}

const FormRow = styled.div`
  display: flex;
  width: 100%;
  font-size: 30px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 4%;

  input {
    padding: 3px;
    font-size: 30px;
    border-radius: 5px;
    box-shadow: 3px 3px #888888;
    border: 1px solid black;
    margin-left: 10px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input:focus {
    outline: none;
  }

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    width: 100%;
    font-size: 7vw;

    input {
      width: 90%;
      margin-left: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Density;

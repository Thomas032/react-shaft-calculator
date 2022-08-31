import React, { useState } from "react";
import styled from "styled-components";

function Item(props) {
  const [num, setNum] = useState(0);

  /* Functions mentioned under are functions to handle the hover over the span with number so the element can be deleted */
  function mouseOver(e) {
    setNum(e.target.innerHTML);
    // eslint-disable-next-line
    if (e.target.innerHTML != 0 && e.target.innerHTML != 1) {
      e.target.style.background = "#ff5252";
      e.target.innerHTML = "X";
    }
  }
  function mouseOff(e) {
    // eslint-disable-next-line
    if (e.target.innerHTML != 0 && e.target.innerHTML != 1) {
      e.target.style.background = "#5fd068";
      e.target.innerHTML = num;
    }
  }

  return (
    <FormItem>
      <span
        className="number"
        onMouseEnter={mouseOver}
        onMouseLeave={mouseOff}
        onClick={(e) => props.handleDelete(e, props.id)}
      >
        {props.index}.
      </span>
      <div>
        {props.type === "density" && (
          <FormRow>
            <p>
              Hustota [kg·m<sup>-3</sup>]
            </p>
            <input
              type="number"
              onChange={props.handleDensityChange}
              value={props.density}
              required
            ></input>
          </FormRow>
        )}
        {props.type === "normal" && (
          <React.Fragment>
            <FormRow>
              <p>Délka [mm]:</p>
              <input
                type="number"
                onChange={(e) => props.handleLenghtChange(e, props.id)}
                value={props.length}
                required
              ></input>
            </FormRow>
            <FormRow>
              <p>Poloměr [mm]:</p>
              <input
                type="number"
                onChange={(e) => props.handleCircumferenceChange(e, props.id)}
                value={props.circumference}
                required
              ></input>
            </FormRow>
            {props.id !== 1 && (
              <React.Fragment>
                <OptionsRow>
                  <p>Operace</p>
                </OptionsRow>
                <OptionsRow>
                  <OrientationSpan
                    className={props.k === 1 ? "active" : ""}
                    onClick={(e) => props.handleClick(e, props.index, 1)}
                  >
                    +
                  </OrientationSpan>
                  <OrientationSpan
                    className={props.k === -1 ? "active" : ""}
                    onClick={(e) => props.handleClick(e, props.index, -1)}
                  >
                    -
                  </OrientationSpan>
                </OptionsRow>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </FormItem>
  );
}
const FormItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: none;
  margin-bottom: 2em;

  .number {
    border-radius: 20px 0px 0px 20px;
    width: 2em;
    background: #5fd068;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 5rem;
    font-weight: bold;
    padding: 5px;
    margin-right: 2%;
  }

  &:first-child {
    .number {
      background: #9e9e9e;
    }
  }

  @media only screen and (max-width: 575px) {
    .number {
      width: 20%;
      margin-right: 1%;
      font-size: 3rem;
    }
  }
`;
const FormRow = styled.div`
  display: flex;
  width: 100%;
  font-size: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 4%;

  input {
    padding: 3px;
    font-size: 30px;
    border-radius: 5px;
    box-shadow: 3px 2px #00000045;
    border: 1px solid black;
    margin-left: 10px;
    width: 40%;
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

const OptionsRow = styled.div`
  display: flex;
  width: 100%;
  font-size: 2rem;
  justify-content: flex-start;
  align-items: center;
  p {
    font-size: 0.8em;
  }
`;

const OrientationSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  border-radius: 5px;
  background: white;
  font-weight: bold;
  font-size: 1em;
  background: #00000017;
  margin-right: 2%;

  &:first-child.active {
    background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    color: white;
  }
  &:last-child.active {
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    color: white;
  }
`;

export default Item;

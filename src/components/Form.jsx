import React, { useState, useRef } from "react";
import styled from "styled-components";
import Item from "./Item";
import ButtonSection from "./ButtonSection";
import Calculation from "./Calculation";
import Total from "./Total";

function Form() {
  const [elements, setElements] = useState([
    { length: 0, circumference: 0, k: 1 }, // density
    { length: 0, circumference: 0, k: 1 }, // first starter element -> lenght = length of the shaft; circumference = circ. of the shaft;
    // k = constant that determines if the part of the shaft should be added or subtracted
  ]);
  const [density, setDensity] = useState(7850);
  const [finished, setFinished] = useState(false);
  const total_ref = useRef(null); // reference point to total box
  var result = 0; // the total value of the calculation

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop); // function for scrolling to element

  function handleDensityChange(event) {
    setDensity(event.target.value);
  }

  function handleLengthChange(event, index) {
    /* Function for updating the value on user input.
      The update is done by creating a duplicate of the elements array and editing length field
      on the element with specific index in the array.
    */
    var newElements = elements.map((element) => {
      var id = elements.indexOf(element);
      if (id === index) {
        const updated = { ...element, length: event.target.value };
        return updated;
      }
      return element;
    });
    setElements(newElements);
  }

  function handleCircumferenceChange(event, index) {
    /* Function for updating the value of circumgference on user input.
      The principle is the same as in the handle length function.
    */
    var newElements = elements.map((element) => {
      var id = elements.indexOf(element);
      if (id === index) {
        const updated = { ...element, circumference: event.target.value };
        return updated;
      }
      return element;
    });
    setElements(newElements);
  }

  function handleAddition(event) {
    /* function for adding new items to the elements array on user click.
      This function adds the new element by simply copying the old array and just adding the new element there.
    */
    var newElements = [...elements, { length: 0, circumference: 0, k: 1 }];
    setElements(newElements);
  }

  function handleResult(event) {
    /* Function for displaying the result of the calculation */
    setFinished(true);
    scrollToRef(total_ref); // 'scroll' to specified element
  }

  function handleDelete(e, index) {
    /* Function for deleting specified element.
      It does that by filtering the whole array in specific way, so that the deleted item is not in the outcome array.
      The first condition is there to prevent the user from deleting the first input container.
    */
    // eslint-disable-next-line
    if (index != 1) {
      const newElements = elements.filter(
        (item) => elements.indexOf(item) !== index
      );
      setElements(newElements);
    }
  }

  function handleClick(event, index, k) {
    /* Function for changing the constant k, because the user clicked on the button. */

    var newElements = elements.map((element) => {
      var id = elements.indexOf(element);
      if (id === index) {
        const updated = { ...element, k: k };
        return updated;
      }
      return element;
    });
    setElements(newElements);
  }

  function calculateWeight(id) {
    /* Function for handeling the calculation it self */
    var element = elements[id];
    // prettier-ignore
    var total = Math.PI * Math.pow(element.circumference / 1000, 2) * (element.length / 1000) * density;
    result += element.k * total;
    return total.toFixed(4);
  }

  return (
    <MainForm>
      {elements.map((element) => {
        var id = elements.indexOf(element);
        if (id === 0) {
          return (
            <Item
              index={id}
              type="density"
              handleDensityChange={handleDensityChange}
              density={density}
              key={id}
            />
          );
        } else {
          return (
            <Item
              index={id}
              type="normal"
              length={element.length}
              circumference={element.circumference}
              handleLenghtChange={handleLengthChange}
              handleCircumferenceChange={handleCircumferenceChange}
              handleDelete={handleDelete}
              handleClick={handleClick}
              k={element.k}
              id={id}
              key={id}
            />
          );
        }
      })}
      <ButtonSection
        handleAddition={handleAddition}
        handleResult={handleResult}
      />

      <Box
        className={finished === true ? "" : "blocked"}
        id="total"
        ref={total_ref}
      >
        {elements.map((element) => {
          var id = elements.indexOf(element);
          if (id !== 0) {
            return (
              <Calculation
                density={density}
                length={element.length}
                circumference={element.circumference}
                k={element.k}
                total={calculateWeight(id)}
                index={id}
                key={id}
              />
            );
          }
        })}
        <Total
          result={result.toFixed(4)}
          resultG={(result * 1000).toFixed(2)}
        />
      </Box>
    </MainForm>
  );
}

const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2%;

  @media only screen and (max-width: 575px) {
    margin-top: 10%;
    width: 95%;
  }
  .blocked {
    display: none;
  }
`;

const Box = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  font-size: 3rem;

  @media only screen and (max-width: 575px) {
    font-size: 2rem;
  }
`;

export default Form;

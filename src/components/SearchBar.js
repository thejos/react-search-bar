import { useState } from "react";
import { useEffect } from "react";
import Button from "./Button";
//Imports END

//React Component
function SearchBar(props) {
  //useState React hook
  const [searchValue, setSearchValue] = useState("");
  //Counts Clear button clicks
  const [clickCount, setClickCount] = useState(0);
  //Sets label text
  const [labelText, setLabelText] = useState("");

  //Gets input value and assigns the value to searchValue and labelText variables
  function handleInputChange(event) {
    setSearchValue(event.target.value);
    setLabelText(event.target.value);
  }

  //Clears input and label
  function clearInput() {
    setSearchValue("");
    setLabelText("");
  }

  //Increments the number of Clear button clicks
  function countClicks() {
    setClickCount(clickCount + 1);
  }

  //Filters items based on user input and stores items to filteredItems array
  const filteredItems = props.itemList.filter((item) => {
    return item.toLowerCase().includes(searchValue.toLowerCase());
  });

  //useEffect React hook
  useEffect(() => {
    if (props.itemList.length > 0) {
      if (clickCount === 3) {
        //remove a random element form an array and assign to variable
        let removedItem = props.itemList.splice(
          Math.floor(Math.random() * props.itemList.length),
          1
        );
        //get a random element form an array
        let rndItem =
          props.itemList[Math.floor(Math.random() * props.itemList.length)];
        //display a message via alert box
        alert(
          props.itemList.length > 0
            ? `${removedItem} gone out of window.\nTry: ${rndItem}`
            : `List is empty`
        );
        //log a message to console
        console.log(props.itemList, removedItem, rndItem);
        //reset number of clicks
        setClickCount(0);
      } //inner if END
    } else {
      setSearchValue("");
      setLabelText("refresh the web page to repopulate the list.");
    } //if-else END
  }, [clickCount, props.itemList, searchValue, labelText]); //useEffect() END

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        placeholder={props.placeholderText}
        onChange={handleInputChange}
        id="searchField"
      />
      {/*Conditional rendering (short-circuit conditional) - should Button be rendered*/}
      {searchValue.length > 0 && (
        <Button
          onClick={() => {
            clearInput();
            countClicks();
          }}
          buttonText={"Clear"}
        />
      )}
      {/* Render input value  */}
      <div>
        <label htmlFor="searchField">{labelText}</label>
      </div>
      {/* <div>{searchValue}</div> */}
      {/* Show (map) every item from filteredItems array */}
      <ul>
        {filteredItems.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
} //Component SearchBar END

export default SearchBar;

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup, Icon, Button, UL } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
//import END

//React Component
function SearchBar(props) {
  // useState React hook
  /* The React useState Hook allows tracking state in a function component.
     State generally refers to data or properties that need to be tracking in an application.
     useState accepts an initial state and returns two values:
     - The current state
     - A function that updates the state
     The first value, searchValue, is the current state.
     The second value, setSearchValue, is the function that is used to update the state.
     To update the state, we use state updater function. !!
     Never directly update state. Ex: searchValue = "blah" is not allowed. !!*/
  const [searchValue, setSearchValue] = useState("");
  //Counts Clear button clicks
  const [clickCount, setClickCount] = useState(0);
  //Sets label text
  const [labelText, setLabelText] = useState("");
  //Determines the value of 'disabled?:' property on <InputGroup /> component
  const [isDisabled, setIsDisabled] = useState(false);

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
  /*The useEffect Hook allows to perform side effects in react application components. 
    useEffect accepts two arguments. The second argument is optional. !
    -----------------------------------
    useEffect(<function>, <dependency>)
    -----------------------------------
    Always include the second parameter which accepts an array. !!
    If there are multiple dependencies, they should be included in the useEffect dependency array.*/
  useEffect(() => {
    if (props.itemList.length > 0) {
      if (clickCount === 3) {
        //removes random element from the 'itemList' array and saves the value to 'removedItem'
        let removedItem = props.itemList.splice(
          Math.floor(Math.random() * props.itemList.length),
          1
        );

        //gets a random element form the array
        let rndItem =
          props.itemList[Math.floor(Math.random() * props.itemList.length)];

        //use toast to notify the user. [react-toastify]
        toast.info(
          //condition
          props.itemList.length > 0
            ? //messages
              `${removedItem} went out the window. Try ${rndItem}.`
            : `${removedItem} is gone. List is empty.`,
          //toast options (supersede ToastContainer (from App element) props)
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2500,
            closeButton: false,
            hideProgressBar: false,
            pauseOnHover: true,
            pauseOnFocusLoss: true,
            closeOnClick: true,
            draggable: false,
            progressStyle: { height: "1px", backgroundColor: "#B3CCFF" },
            style: { fontSize: "14px" },
            // delay: 0,
            // progress: 0.5,
          }
        ); //toast END

        //logs message to console
        console.log(props.itemList, removedItem, rndItem);

        //resets number of clicks
        setClickCount(0);
      } //inner if END
    } else {
      setSearchValue("");
      setLabelText("Refresh the web page to repopulate the list.");
      setIsDisabled(true);
    } //if-else END
  }, [clickCount, props.itemList, searchValue, labelText]); //useEffect() END

  return (
    <div style={{ padding: "10px" }}>
      {/*div contains:
       input field with icon and button. All from: [@blueprintjs/core]*/}
      <div
        style={{
          display: "inline-block",
          width: "20vw",
          marginLeft: 14,
          marginTop: 6,
        }}
      >
        <InputGroup //[@blueprintjs/core]
          small={true}
          disabled={isDisabled}
          type="text"
          value={searchValue}
          placeholder={props.placeholderText}
          onChange={handleInputChange}
          id="searchField"
          autoComplete="off"
          //leftside icon
          leftElement={
            <Icon //[@blueprintjs/core]
              icon="search"
              size="0.9em"
              style={{
                marginTop: 5,
                marginRight: 4,
                marginLeft: 6,
              }}
            />
          }
          //rightside element - button
          rightElement={
            searchValue.length > 0 && (
              <Button //[@blueprintjs/core]
                disabled={false}
                icon={"cross"}
                minimal={true}
                style={{
                  outline: "none",
                }}
                onClick={() => {
                  clearInput();
                  countClicks();
                }}
              />
            )
          }
        />
      </div>

      {/* Render input value  */}
      <div style={{ marginTop: "2px", marginLeft: "22px" }}>
        <label htmlFor="searchField">{labelText}</label>
      </div>

      {/* Show (map) every item from filteredItems array using unordered list from [@blueprintjs/core]*/}
      <UL style={{ marginLeft: "10px" }}>
        {filteredItems.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </UL>
    </div> //div container END
  ); //return() END
} //Component SearchBar END

export default SearchBar;

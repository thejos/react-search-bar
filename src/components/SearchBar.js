import { useState } from "react";
import ClearButton from "./ClearButton";
//Imports END

//React Component
function SearchBar(props) {
  //useState React hook
  const [searchValue, setSearchValue] = useState("");

  //Get input value and assign it to searchValue variable
  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  //Clear input via button
  function clearInput() {
    setSearchValue("");
  }

  //Filter items based on user input and store them to filteredItems array
  const filteredItems = props.itemList.filter((item) => {
    return item.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        placeholder={props.placeholderText}
        onChange={handleInputChange}
      />
      {/*Conditional rendering (short-circuit conditional) - should ClearButton be rendered*/}
      {searchValue.length > 0 && <ClearButton clearInput={clearInput} />}
      {/* Render input value  */}
      <div>{searchValue}</div>
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

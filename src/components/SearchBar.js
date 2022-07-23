import { useState } from "react";
import ClearButton from "./ClearButton";
//Imports END

//String array - collection of random items
const items = [
  "Clothes Pin",
  "Tennis Racket",
  "Snail Shell",
  "Canteen",
  "Empty Bottle",
  "Socks",
  "Light Bulb",
  "Fishing Hook",
];

//React Component
function SearchBar() {
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
  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        placeholder="search..."
        onChange={handleInputChange}
      />
      {/*Conditional rendering (short-circuit conditional)*/}
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

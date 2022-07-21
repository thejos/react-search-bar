import { useState } from "react";

function SearchBar() {
  //State
  const [searchValue, setSearchValue] = useState("");

  //Input Change
  function handleInputChange(event) {
    // alert(`input changed - [${event.target.value}]`);
    setSearchValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        placeholder="search..."
        onChange={handleInputChange}
      />
      <div>{searchValue}</div>
    </div>
  );
}

export default SearchBar;

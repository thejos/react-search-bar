import SearchBar from "./components/SearchBar";

function App() {
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
  const flowers = [
    "daffodil",
    "hyacinth",
    "lilac",
    "bellflower",
    "tulip",
    "thistle",
    "lily",
    "peony",
  ];
  return (
    <div>
      <SearchBar itemList={items} placeholderText={"item search..."} />
      <SearchBar itemList={flowers} placeholderText={"flower search..."} />
    </div>
  );
}

export default App;

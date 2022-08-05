import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

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
    "Daffodil",
    "Hyacinth",
    "Lilac",
    "Bellflower",
    "Tulip",
    "Thistle",
    "Lily",
    "Peony",
  ];

  //useState React Hook
  const [products, setProducts] = useState([]);
  //useEffect React Hook
  useEffect(() => {
    //collects products from fakestore
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((hasProduct) => {
        //maps product titles to products array via setProducts function from useState hook
        const fetchedProducts = hasProduct.map((product) => {
          return product.title;
        });
        setProducts(fetchedProducts);
      });
  }, []); //useEffect() END

  return (
    <div>
      <SearchBar itemList={items} placeholderText={"item search..."} />
      <SearchBar itemList={flowers} placeholderText={"flower search..."} />
      {/*conditional expression with ternary operator:
          has-product ? render SearchBar : render loading spinner */}
      {products.length > 0 ? (
        <SearchBar itemList={products} placeholderText={"product search..."} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "18vw",
            height: "16vw",
            padding: "10px",
          }}
        >
          <PuffLoader color="#ACB5B9" loading size={80} speedMultiplier={1} />
          {/* <span>Loading...</span> */}
        </div>
      )}
      {/*conditional ternary END*/}
    </div>
  );
}

export default App;

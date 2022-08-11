import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UlSkeleton from "./components/UlSkeleton";
//END import

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
  //...flower collection
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
        //delays value assignment to array 'products'
        //effect: prevents skeleton screen flashing for a split second
        let timeoutID = setTimeout(() => {
          setProducts(fetchedProducts);
        }, 1000);
        //clears the timer when unmounting
        return () => clearTimeout(timeoutID);
      });
  }, []); //useEffect() END

  return (
    <div>
      <SearchBar itemList={items} placeholderText={"item search..."} />
      <SearchBar itemList={flowers} placeholderText={"flower search..."} />
      {/*conditional expression with ternary operator:
          has-product ? render SearchBar : render UlSkeleton */}
      {products.length > 0 ? (
        <SearchBar itemList={products} placeholderText={"product search..."} />
      ) : (
        <UlSkeleton />
      )}
      {/*conditional ternary END*/}
    </div>
  );
}

export default App;

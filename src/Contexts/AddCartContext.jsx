import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";

export const AddCartTheme = createContext();

function AddCartContext(props) {
  const initialData = JSON.parse(localStorage.getItem("add")) || [];
  const [searchData, setSearchData] = useState([]);
  const [data, setData] = useState(initialData);
  const [productData, setProductData] = useState([]);
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [itemsSum, setItemsSum] = useState(0);
  const [isSearch, setIsSearch] = useState("");
  const [productList, setProductList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoryData, setDataFetch] = useState([]);

  const cartRef = useRef(null);

  const isSameToggler = (array, title) => {
    return array.some((elem) => elem.title === title);
  };

  const addCartHandler = (propData) => {
    let array = [...data];
    if (!isSameToggler(array, propData.title)) {
      array.push(propData);
      localStorage.setItem("add", JSON.stringify(array));
      setData(array);
      setOpen(true);
    } else {
      setAdded(true);
      setOpen(false);
    }
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("add")) || [];
    setData(storedData);
  }, []);

  const handleHiddenCart = () => {
    setProductList(false);
  };

  const handleCloseSnackBar = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setAdded(false);
  };

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setIsSearch(inputValue);
  };

  const handleDeleteCartItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("add", JSON.stringify(updatedData));
  };

  const calculateSum = () => {
    const itemsSum = data.reduce((prev, item) => prev + item.price, 0);
    setItemsSum(itemsSum);
  };

  const handleAddedProducts = () => {
    setProductList(!productList);
  };

  const handleAddInCart = (e) => {
    e.stopPropagation();
    addCartHandler(productData);
  };

  const handleCart = () => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
          setProductList(false); // Close the cart when clicked outside
        }
      }

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [useProducts]);
  };

  function fetchProducts(id) {
    const products = async () => {
      setLoading(false);
      try {
        console.log(id);
        const response = await fetch(
          `https://dummyjson.com/products/category/${id}`
        );

        if (response.ok) {
          const data = await response.json();
          setDataFetch(data.products);
          setLoading(true);
        }
      } catch (error) {
        setLoading(true);
      }
    };
    products();
  }

  async function allProducts() {
    setLoading(false);
    try {
      const response = await fetch("https://dummyjson.com/products?limit=15");
      const data = await response.json();
      setDataFetch(data.products);
      setLoading(true);
    } catch (error) {
      setLoading(true);
    }
  }

  const fetchInnerProduct = async (id) => {
    setLoading(false);
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProductData(data);
      setLoading(true);
    } catch (error) {
      console.log("error", error);
      setLoading(true);
    }
  };

  const fetchSearchedData = async (id) => {
    setLoading(false);

    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${id}`
      );
      const searchData = await response.json();
      const products = searchData.products;
      setDataFetch(products);
      console.log(products);
      setLoading(true);

      console.log(searchData.products);
    } catch (error) {
      console.log("error", error);
      setLoading(true);
    }
  };
  return (
    <AddCartTheme.Provider
      value={{
        fetchProducts,
        allProducts,
        handleCart,
        fetchInnerProduct,
        fetchSearchedData,
        categoryData,
        handleAddInCart,
        productData,
        cartRef,
        handleCloseSnackBar,
        handleAddedProducts,
        handleDeleteCartItem,
        handleSearchChange,
        calculateSum,
        addCartHandler,
        handleHiddenCart,
        loading,
        data,
        open,
        added,
        productList,
        itemsSum,
        isSearch,
        searchData,
      }}
    >
      {props.children}
    </AddCartTheme.Provider>
  );
}
function useProducts() {
  const context = useContext(AddCartTheme);
  if (context === undefined) throw new Error("error");
  return context;
}

export { AddCartContext, useProducts };

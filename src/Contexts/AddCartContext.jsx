import React, { createContext, useState, useEffect } from "react";

export const AddCartTheme = createContext();

function AddCartContext(props) {
  const initialData = JSON.parse(localStorage.getItem("add")) || [];
  const [searchData, setSearchData] = useState([]);

  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [sum, setSum] = useState(0);

  const [isSearch, setIsSearch] = useState("");

  const [productList, setProductList] = useState(false);

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

  return (
    <AddCartTheme.Provider
      value={{
        addCartHandler: addCartHandler,
        handleHiddenCart: handleHiddenCart,
        data: data,
        open: open,
        added: added,
        setData: setData,
        setOpen: setOpen,
        setAdded: setAdded,
        productList: productList,
        setProductList: setProductList,
        sum: sum,
        setSum: setSum,
        isSearch: isSearch,
        setIsSearch: setIsSearch,
        searchData: searchData,
        setSearchData: setSearchData,
      }}
    >
      {props.children}
    </AddCartTheme.Provider>
  );
}

export default AddCartContext;

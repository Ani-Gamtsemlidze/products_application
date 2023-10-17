import React, { createContext, useState, useEffect } from "react";
import CartAdded from "../components/layout/SnackBar";

export const AddCartTheme = createContext();

function AddCartContext(props) {
  const initialData = JSON.parse(localStorage.getItem("add")) || [];
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const isSameToggler = (array, title) => {
    return array.some((elem) => elem.title === title);
  };

  const addCartHandler = (propData) => {
    let array = [...data]; // Create a copy of the existing data
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
    // Update data when localStorage changes
    const storedData = JSON.parse(localStorage.getItem("add")) || [];
    setData(storedData);
  }, []);

  return (
    <AddCartTheme.Provider
      value={{
        addCartHandler: addCartHandler,
        data: data,
        open: open,
        added: added,
        setOpen: setOpen,
        setAdded: setAdded,
      }}
    >
      {props.children}
    </AddCartTheme.Provider>
  );
}

export default AddCartContext;

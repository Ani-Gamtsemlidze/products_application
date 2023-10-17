import React, { createContext, useState, useEffect } from "react";

export const AddCartTheme = createContext();

function AddCartContext(props) {
  const initialData = JSON.parse(localStorage.getItem("add")) || [];
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [sum, setSum] = useState(0);

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

  return (
    <AddCartTheme.Provider
      value={{
        addCartHandler: addCartHandler,
        data: data,
        open: open,
        added: added,
        setData: setData,
        setOpen: setOpen,
        setAdded: setAdded,
        sum: sum,
        setSum: setSum,
      }}
    >
      {props.children}
    </AddCartTheme.Provider>
  );
}

export default AddCartContext;

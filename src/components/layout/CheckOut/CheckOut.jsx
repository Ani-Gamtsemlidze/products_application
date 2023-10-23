import { useContext, useEffect, useState } from "react";
import { AddCartTheme } from "../../../Contexts/AddCartContext";

function CheckOut() {
  const ctxAddCart = useContext(AddCartTheme);

  const [active, setActive] = useState(false);

  const handleDelete = (id) => {
    const updatedData = ctxAddCart.data.filter((item) => item.id !== id);
    ctxAddCart.setData(updatedData);
    localStorage.setItem("add", JSON.stringify(updatedData));
  };

  useEffect(() => {
    const sum = ctxAddCart.data.reduce((prev, item) => prev + item.price, 0);
    ctxAddCart.setSum(sum);
  }, [ctxAddCart.data]);

  return (
    <div
      className=" pt-40	pb-12	bg-gray-100"
      style={{ minHeight: "calc(100vh - 52px)" }}
    >
      {ctxAddCart.data.map((item, index) => (
        <div
          key={index}
          className="flex max-lg:flex-col items-center m-8 border p-4 max-lg:p-2 relative max-lg:h-96	"
        >
          <div className="w-32 h-32 max-lg:w-full max-lg:h-36 ">
            <img className="w-full h-full object-cover" src={item.thumbnail} />
          </div>
          <div className="ml-4 max-lg:ml-0 max-lg:mt-2">
            <div className="">
              <h2 className="text-xl max-lg:text-dm">{item.title}</h2>
            </div>
            <div className="max-lg:mt-2 ">
              <span className="text-green-800 max-lg:text-xl ">
                {item.price}$
              </span>
            </div>
            <div className="w-auto max-lg:mt-2">
              {item.description.split(" ").slice(0, 10).join(" ")}
              <span>...</span>
            </div>
          </div>
          <div
            onClick={() => handleDelete(item.id)}
            className="flex items-center absolute right-4 
            cursor-pointer max-lg:bottom-3 max-lg:w-52"
          >
            <span className="text-center text-red-600">Remove From Cart</span>
          </div>
        </div>
      ))}

      {ctxAddCart.data.length ? (
        <div className="border p-6 m-8">
          <p className="text-xl text-end">
            Sum{" "}
            <span className="text-green-700 text-2xl">{ctxAddCart.sum}$</span>
          </p>
        </div>
      ) : (
        <div className="">
          <h2 className="text-center text-xl text-red-600">Cart Is Empty</h2>
        </div>
      )}
    </div>
  );
}

export default CheckOut;

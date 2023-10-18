import { useContext, useEffect } from "react";
import { AddCartTheme } from "../../Contexts/AddCartContext";

function CheckOut() {
  const ctxAddCart = useContext(AddCartTheme);

  const handleDelete = (id) => {
    const updatedData = ctxAddCart.data.filter((item) => item.id !== id);
    ctxAddCart.setData(updatedData);
  };

  useEffect(() => {
    const sum = ctxAddCart.data.reduce((prev, item) => prev + item.price, 0);
    ctxAddCart.setSum(sum);
  }, [ctxAddCart.data]);

  return (
    <div
      className=" pt-40	pb-12	bg-gray-100"
      style={{ minHeight: "calc(100vh - 88px)" }}
    >
      {ctxAddCart.data.map((item, index) => (
        <div key={index} className="flex items-center m-8 border p-4 relative">
          <div className="w-32 h-32 ">
            <img className="w-full h-full object-cover" src={item.thumbnail} />
          </div>
          <div className="ml-4">
            <div className="">
              <h2 className="text-xl">{item.title}</h2>
            </div>
            <div>
              <span className="text-green-800">{item.price}$</span>
            </div>
            <div className="w-auto">
              {item.description.split(" ").slice(0, 10).join(" ")}
            </div>
          </div>
          <div
            onClick={() => handleDelete(item.id)}
            className="flex items-center absolute right-4 cursor-pointer"
          >
            <span className="text-end text-red-600">Remove From Cart</span>
          </div>
        </div>
      ))}
      {!ctxAddCart.data.length && (
        <div className="pt-8">
          <h2 className="text-center text-xl text-red-600">Cart Is Empty.</h2>
        </div>
      )}
      <div className="border p-6 m-8">
        <p className="text-xl text-end">
          Sum <span className="text-green-700 text-2xl">{ctxAddCart.sum}$</span>
        </p>
      </div>
    </div>
  );
}

export default CheckOut;

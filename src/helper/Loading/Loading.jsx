import loadingGif from "../../assets/loading.gif";

function Loading() {
  return (
    <div className="flex justify-center">
      <img className="w-40 mt-6 object-cover" src={loadingGif} alt="Loading" />
    </div>
  );
}

export default Loading;

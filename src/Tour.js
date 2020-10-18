import React from "react";

export default function Tour({ id, name, info, image, price, removeTour }) {
  const [more, setMore] = React.useState(false);
  return (
    <div className="w-full bg-white shadow-xl my-4 rounded-xl pb-4 ">
      <div className="h-64 w-full">
        <img
          src={image}
          alt={name}
          className="rounded-t-xl h-full w-full object-cover"
        />
      </div>

      <div className="flex justify-around my-4">
        <h1 className="font-bold">{name}</h1>
        <h1 className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          ${price}
        </h1>
      </div>
      {more ? (
        <div>
          <p className=" px-2">{info}</p>
          <button onClick={() => setMore(!more)} className="text-indigo-400">
            {" "}
            weniger
          </button>
        </div>
      ) : (
        <div>
          <p className=" px-2">
            {`${info.substring(0, 200)}`}
            <button onClick={() => setMore(!more)} className="text-indigo-400">
              {" "}
              ...mehr
            </button>
          </p>
        </div>
      )}

      <button
        className=" block mx-auto border-4 border-red-400 px-2 py-1 rounded text-red-600 hover:bg-red-400 hover:text-white mt-3"
        onClick={() => {
          removeTour(id);
        }}
      >
        Not interested
      </button>
    </div>
  );
}

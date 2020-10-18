import React from "react";
import Tour from "./Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <div className="md:w-1/3 mx-auto w-11/12">
      {tours.map((tour) => {
        const { id, name, info, image, price } = tour;
        return <Tour key={id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
}

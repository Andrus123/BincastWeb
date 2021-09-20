import React, { useEffect } from "react";

const Favorites = () => {
  useEffect(() => {
    // update the document title
    document.title = "Favorites - Bincast";
  });

  return (
    <div>
      <h1>Bincast</h1>
      <p>These are my Favorites</p>
    </div>
  );
};

export default Favorites;

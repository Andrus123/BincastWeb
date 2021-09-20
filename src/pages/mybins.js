import React, { useEffect } from "react";

const MyBins = () => {
  useEffect(() => {
    // update the document title
    document.title = "My Bins - Bincast";
  });

  return (
    <div>
      <h1>Bincast</h1>
      <p>These are my bins</p>
    </div>
  );
};

export default MyBins;

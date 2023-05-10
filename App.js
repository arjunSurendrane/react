import React from "react";
import ReactDom from "react-dom/client";

const HeadingComponent = () => {
  return (
    <div>
      <h2>Welcome to react page</h2>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

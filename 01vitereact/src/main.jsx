import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
// import { jsx as _jsx } from "react/jsx-runtime.js";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App | </h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a", //type of the element that is in div
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   }, // it has properties or attributes
//   children: "Click me to visit google",
// };

const anotherUser = "Chai aur react";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https://youtube.com", target: "_blank" },
  "click me to visit youtube",
  anotherUser
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  // <MyApp />
  // MyApp() // not recommended as it will execute because if in project nobody writes like this.

  // ReactElement
  // anotherElement
  reactElement
);

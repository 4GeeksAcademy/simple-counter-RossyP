//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'));
let num = 0;


setInterval(function () {
  console.log(num++)

  root.render(<Home seconds={num} />);
}, 1000);



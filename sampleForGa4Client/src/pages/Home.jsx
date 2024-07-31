import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <div className="h-screen w-screen flex flex-col justify-center items-center gap">
        <h1>Home</h1>
        <br />
        <Link to="/Page1">Page 1</Link>
        <Link to="/Page2">Page 2</Link>
        <Link to="/Page3">Page 3</Link>
      </div>
      <Routes>
        <Route path="/Page1" element={<Page1/>} />
        <Route path="/Page2" element={<Page2/>} />
        <Route path="/Page3" element={<Page3/>} />
      </Routes>
    </Router>
  );
}

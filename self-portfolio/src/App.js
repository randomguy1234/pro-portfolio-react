import React from "react";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import About from "./components/Navigation/about";


//need to add tailwind css colors
function App() {
  return (
    <div>
      <main>
        <Header>  </Header>
        <About></About>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;

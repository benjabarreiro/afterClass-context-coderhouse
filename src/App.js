import React from "react";
import { ContextProvider } from "./Context/Context";
import Comp1 from "./Components/Comp1";

function App() {
  return (
    <div>
      <ContextProvider>
        Hola
        <Comp1 />
      </ContextProvider>
    </div>
  );
}

export default App;

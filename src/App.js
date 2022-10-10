import React, { useState } from "react";
import ColorList from "./Components/ColorList"
import AddColorForm from "./Components/AddColorForm";

const App = () => {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  )
}

export default App;
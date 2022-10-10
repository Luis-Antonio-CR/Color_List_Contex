import React, { useState } from "react";
import colorData from "./color-data.json"
import ColorList from "./Components/ColorList"
import AddColorForm from "./Components/AddColorForm";
import { v4 } from "uuid";

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
      <AddColorForm onNewColor={(title,color)=> {
        const newColors = [...colors, {id: v4(), title, color, rating: 0}];
        setColors(newColors);
      }}/>
      <ColorList colors={colors}
      onRemoveColor={
        id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }
      }
      onRateColor={
        (id,rating)=>{
          const newColors = colors.map(color => color.id === id ? {...color, rating} : color);
          setColors(newColors);
        }
      } />
    </div>
  );
}

export default App; 

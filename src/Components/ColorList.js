import React, { useContext } from "react";
import { ColorContex } from "./";
import Color from "./Color";

const ColorList = () => {
    const { colors } = useContext(ColorContex);
    if(!colors.length){return <h2>Not colors in the list</h2>}
    return (
        <>
            {colors.map(color => {
                return <Color key={color.id} {...color} />
            })}
        </>
    )
}

export default ColorList;
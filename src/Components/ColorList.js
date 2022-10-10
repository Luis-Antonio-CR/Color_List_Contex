import React from "react";
import Color from "./Color";

const ColorList = ({colors = [], onRemoveColor = f => f, onRateColor = f => f}) => {
    if(!colors.length){return <h2>Not colors in the list</h2>}
    return (
        <>
            {colors.map(color => {
                return <Color key={color.id} {...color} onRemove= {onRemoveColor} onRate={onRateColor} />
            })}
        </>
    )
}

export default ColorList;
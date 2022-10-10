import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "../color-hook";

const Color = ({id,title,color,rating}) => {
    const {rateColor, removeColor} = useColors();
    return (
        <div style={{backgroundColor : color, padding: "15px"}}>
            <h2>{title}</h2>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)} />
        </div>
    )
}

export default Color;
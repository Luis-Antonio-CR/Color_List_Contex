import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

const Color = ({id, title, color, rating, onRemove = f => f, onRate = f => f}) => {
    return (
        <div style={{backgroundColor : color, padding: "15px"}}>
            <h2>{title}</h2>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <StarRating selectedStars={rating} onRate={rating => onRate(id, rating)} />
        </div>
    )
}

export default Color;
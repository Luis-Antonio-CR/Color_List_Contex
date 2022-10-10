import React, {useRef, useState} from "react";
import { useInput } from "./hooks";

const AddColorForm1 = ({ onNewColor= f => f }) => {
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = e => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        onNewColor(title, color);
        txtTitle.current.value = "";
        hexColor.current.value = "";
    }

    return(
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder="color title ..." required />
            <input ref={hexColor} type="color" required />
            <button>Add</button>
         </form>
    )
}

const AddColorForm2 = ({ onNewColor= f => f }) => {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000");

    const submit = e => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle("");
        setColor("");
        
    }

    return(
        <form onSubmit={submit}>
            <input value={title} onChange={event => setTitle(event.target.value)} type="text" placeholder="color title ..." required />
            <input value={color} onChange={event => setColor(event.target.value)} type="color" required />
            <button>Add</button>
         </form>
    )
}

const AddColorForm = ({ onNewColor= f => f }) => {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000");

    const submit = e => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
        
    }

    return(
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="color title ..." required />
            <input {...colorProps} type="color" required />
            <button>Add</button>
         </form>
    )
}

export default AddColorForm;
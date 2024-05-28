import React, { useState } from 'react'
// import PropTypes from 'prop-types'
export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked", text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked", text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const ClearText = () => {
        // console.log("Uppercase was clicked", text);
        let newText = ('');
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h3>{props.heading}</h3>
                <div className="mb-4">
                    <textarea className="form-control" placeholder='ENTER TEXT HERE' value={text} onChange={handleOnChange} id="box" rows="10"></textarea>
                </div>
                <button className="btn btn-success mx-1" onClick={handleUpClick} >Uppercase</button>
                <button className="btn btn-success mx-1" onClick={handleLoClick} >Lowercase</button>
                <button className="btn btn-success mx-1" onClick={ClearText} >Clear</button>

            </div>
            <div className="container my-3">
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </>
    )
}
// Textform.propTypes = {
//     heading: PropTypes.string.isRequired
// };


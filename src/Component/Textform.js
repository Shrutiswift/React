import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const ClearText = () => {
        let newText = ('');
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    const [mystyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btn, setBtn] = useState("Enable Dark Mode")

    const darkMode = () => {
        if (mystyle.color === 'black') {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtn("Enable Light Mode")
        }
        else {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtn("Enable Dark Mode")

        }
    }



    return (
        <>
            <div className='container' style={mystyle}>
                <div className='container mt-4' style={mystyle}>
                    <h3 >{props.heading}</h3>
                    <div className="mb-4">
                        <textarea className="form-control" placeholder='ENTER TEXT HERE' value={text} onChange={handleOnChange} id="box" rows="10"></textarea>
                    </div>
                    <button className="btn btn-success mx-1" onClick={handleUpClick} >Uppercase</button>
                    <button className="btn btn-success mx-1" onClick={handleLoClick} >Lowercase</button>
                    <button className="btn btn-success mx-1" onClick={ClearText} >Clear</button>
                </div>

                <div className='container'>
                    <button onClick={darkMode} className="btn btn-success mx-1" >{btn}</button>
                </div>
                <div className="container my-3" style={mystyle}>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                </div>
            </div>
        </>
    )
}



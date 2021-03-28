import React from 'react'
import "./Input.css"

const Input = ({message, sendMessage, setMessage}) => {
    return (
        <form className="form">
            <input className="input" placeholder="type a message...." type="text" value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e)=> e.key==='Enter' ? sendMessage(e) : null}/>
            <button className="sendButton" onClick={(e)=> sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input

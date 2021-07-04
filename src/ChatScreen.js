import React, { useState ,useEffect} from 'react'
import "./ChatScreen.css"
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core';

function ChatScreen() {
    const [input,setInput]=useState();

    const sendMessage=(e)=>{
        e.preventDefault();

    }

    useEffect(()=>{

    },[])
    return (
        <div className="chatscreen">
            <form className="chatscreen__form" autoComplete="off">
            <TextField className="chatscreen__input" id="standard-basic" label="Enter the Message"
            value={input}
            onChange={e=>setInput(e.target.value)}
            
            />
            <Button type="submit" onClick={sendMessage}>Send</Button>
            </form>
          
            
        </div>
    )
}

export default ChatScreen

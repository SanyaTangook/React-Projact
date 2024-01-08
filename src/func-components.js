import React from "react";

export function Header(){
    const aStyle = {
        display: 'inline-blok',
        color: 'blue',
        margin: '7px',
        textDecoration: 'none'
    }
    return(
        <div style={{backgroundColor: '#ccc'}}>
            <a href="" style={aStyle} > Home </a> |&nbsp;
            <a href="" style={aStyle} > React </a> |&nbsp;
            <a href="" style={aStyle} > React Native </a> 
        </div>
    )
}
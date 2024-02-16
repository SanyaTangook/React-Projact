import React from "react";

export function Contrnt(){
    return (
        <div style={{textAlign:'center'}}>
            <h2> Hello <br/> React & React Native </h2>
            <br/><br/><br/>
        </div>
    )
}

export const Footer =() =>{
    return(
        <div style={{textAlign:'center'}}>
            &copy; {new Date().getFullYear()} All rights reserved
        </div>
    )
}


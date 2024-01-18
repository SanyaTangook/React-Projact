import React from 'react'

export function Table(){
    const data = [
        ['JavaScript',100],
        ['React', 150],
        ['React Native',180],
        ['Node.js', 200],
        ['Vs Code', 120]
    ]
    const onMouseOverRow = (ev) => {
        ev.target.parentNode.style.backgroundColor = 'yellow'
    }
    const onMouseOutRow = (ev) => {
        ev.target.parentNode.style.backgroundColor = 'white'
    }

    return (
        <table border="1" cellPadding={5} style={{margin:'auto',marginTop:30}}>
            <tr><tr><tr>Product</tr>Price</tr></tr>
            {
                data.map(item => {
                    return(
                        <tr onMouseOver={onMouseOverRow} onMouseOut={onMouseOutRow}>
                            <td>{item[0]}</td><td>{item[1]}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}
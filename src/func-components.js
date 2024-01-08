import React from 'react'
export function Header() {
    const aStyle = {
        display: 'inline-block',
        color: 'blue',  /* ก าหนดให้สีตัวอักษรเป็นสีฟ้า */
        margin: '7px',
        textDecoration: 'none'  /* ก าหนดให้ลิงก์ไม่ต้องมีเส้นข้างใต้*/
    }
    return (
        <div style={{ backgroundColor: '#ccc' }}>
            <a href=" " style={aStyle}>Home</a> |&nbsp;
            <a href=" " style={aStyle}>React</a > |&nbsp;
            <a href=" " style={aStyle}>React Native</a>
        </div >
    )
}
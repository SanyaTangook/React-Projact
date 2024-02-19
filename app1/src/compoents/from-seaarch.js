import React from 'react'

export default function FromSeaarch() {
    const textKw = React.useRef();
    const btOK = React.createRef();

    const onChangKw = () =>{
        if(textKw.current.value.trim()!== ''){
            btOK.current.disabled = false;
        } else {
            btOK.current.disabled = true;
        }
    }
    console.log(textKw)
  return (
    <div style={{margin:'30px'}}>
        <form>
            <input type='text' name='kw' placeholder='ค้นหา' ref={textKw} onInput={onChangKw} /> &nbsp;
            <button ref={btOK} disabled>ตกลง</button>
        </form>
    </div>
  )
}

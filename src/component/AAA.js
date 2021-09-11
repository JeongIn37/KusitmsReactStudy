import React, { useState } from 'react'

function AAA() {

    const [Arr, setArr] = useState(["가","나","다"]);
    
    function ChangeHandler(){
        let tmp = [...Arr];
        tmp.push("라");
        setArr([...tmp]);
    }

    return (
        <div>
            <button onClick={()=> ChangeHandler()}>
                이거 클릭하면 밑에 숫자 커짐
            </button>
            <h1 id="target">{Arr}</h1>
            <div>{Arr.map((tmp, idx) => {
                return <p>{idx + 1}번째 반복: {tmp}</p>
            })}</div>
        </div>
    )
}

export default AAA

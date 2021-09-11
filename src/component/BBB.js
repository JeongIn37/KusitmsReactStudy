import React, { useState } from 'react'

function BBB() {

    const [Bool, setBool] = useState(false);

    return (
        <div>
            {/* Bool이 참이면  <p>불은 참이다</p>
                Bool이 거짓이면  <p>불은 거짓이다</p>
            */}
            {Bool === true
                ?<p>불은 참이다</p>//(참일때 리턴값)
                :<p>불은 참이다</p>//(거짓일때 리턴값)
            }
        <button onClick={() => setBool(!Bool)}>응용편!</button>
      {Bool ? <p>불은 참이다</p> : null}
      {Bool && <p>불은 참이다</p>}
        
        </div>
    )
}

export default BBB

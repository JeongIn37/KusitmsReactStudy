import React, { useState } from "react";
import A from "./component/A";
import B from "./component/B";
import C from "./component/C";

function Test() {

    const [GNB, setGNB] = useState("B");
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <li onClick={()=>setGNB("A")} style={{ marginRight: "10px", cursor: "pointer" }}>A</li>
        <li onClick={()=>setGNB("B")} style={{ marginRight: "10px", cursor: "pointer" }}>B</li>
        <li onClick={()=>setGNB("C")} style={{ cursor: "pointer" }}>C</li>
      </ul>
      <A />
      <B />
      <C />
      
    </div>
  );
}

export default Test;
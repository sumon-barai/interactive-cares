import { useState } from "react";

const Work = () => {
const [count,setCount]=useState(0);

function handelDecrement(){
    if(count>=1)
    setCount(count-1);
}


    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={()=>setCount(count + 1)} > Increment</button>
            <button onClick={handelDecrement}>decrement</button>
        </div>
    );
};

export default Work;
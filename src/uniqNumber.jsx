import {useState} from "react";

function UniqNumber(){
    const state=[2,4,2,1,4,5,76,9,0,0]
    const [array,setArray]=useState(state)
    function changetNumber(){
        setArray(Num)
        function Num(array){
           let arr =[...new Set(array.sort())]
            return arr
        }
        Num(array)
    }
    return(
        <div>
            <h1>I`m uniq</h1>
            <h1>{array}</h1>
            <button onClick={changetNumber}>Change</button>
        </div>
    )
}
export default UniqNumber

import React from 'react'
import {useDispatch, useSelector} from "react-redux";
function FileRandom(props){
const dispatch=useDispatch()
    const name=useSelector(state=>state.name)
    const addWorld=()=>{
    dispatch({type:'ADD',payload:"OLEG"})
    }
    const randomWorld=()=>{
    const rand=()=>{
        let world=['add','assrrt','ddd']
        let raWorld=Math.floor(Math.random()*world.length)
        let world_canget=[]
        let code_world=[]
        world_canget=world[raWorld]
        for (let i=0;i<world_canget.length;i++){
            code_world.push(world_canget[i])

        }
        return code_world


    }
    dispatch({type:'RANDOM',payload:rand()})
    }
    return (
     <div>
         <h1>I am random</h1>
         {name}
         <div>
             <button onClick={()=>addWorld()}>Add world</button>
             <button onClick={()=>randomWorld()}>Add world</button>
         </div>
     </div>
    )
}
export default FileRandom

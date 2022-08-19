import {useDispatch, useSelector} from "react-redux";

function WorldRan(){
    const dispatch=useDispatch()
    const arrNumbers=useSelector(state=>state.watch)
    const poz=()=> {
        const number = () => {
            let sumPositive = arrNumbers.filter((x) => x > 0).reduce((acc, item) => {
                return acc + item


            },0)
            return sumPositive

        }
        dispatch({type: 'SUMPOZITIVE', payload: number()})
    }

    return(
        <div>
            {arrNumbers}
            <div>
                <button onClick={()=>poz()}>Summa positive items</button>
            </div>
        </div>
    )
}
export default WorldRan

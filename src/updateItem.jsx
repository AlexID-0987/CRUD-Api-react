import {Button} from 'react-bootstrap'
import axios from "axios";
function UpdateItem(props){
    function watch(){
        const itemName=prompt('Enter Name')
        const name={id:`${props.id}`,name:itemName}
        const url='http://localhost:3000/cars/'+`${props.id}`
        axios.put(url,name)
            .then(resp=>{console.log(resp)})
    }
    return(
        <div>
           <Button variant="success" onClick={watch}>Update</Button>
        </div>
    )
}
export default UpdateItem

import {Button} from 'react-bootstrap'
import axios from "axios";
function DeleteItem(props){
    function deleteItem(){
        const url='http://localhost:3000/cars/'+`${props.id}`
        axios.delete(url)
            .then(resp=>{console.log(resp)})
    }
    return(
        <div>
            <Button variant={'danger'} onClick={deleteItem}>Delete</Button>
        </div>
    )
}
export default DeleteItem

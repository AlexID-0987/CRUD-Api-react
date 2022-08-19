import {Button} from "react-bootstrap";

function DeleteAnimal(props){
    function deleteAnimal(){
        const url='http://localhost:3000/peoples/'+`${props.id}`
        const deleteItem={
            method:'DELETE',
        }
        fetch(url,deleteItem)
            .then(rez=>{console.log('Object delete'+`${rez.json()}`)})

}
    return (
        <span>
            <Button variant={'danger'} onClick={deleteAnimal}>Delete</Button>
        </span>
    )
}
export default DeleteAnimal

import {Button} from "react-bootstrap";

function UpdateAnimal(props){
    function updateAnimals(){
        const name=prompt('Enter name')
        const photo=prompt("Enter url photo")
        const url='http://localhost:3000/peoples/'+`${props.id}`
        const animals= {
            method:"PUT",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                id: props.id,
                name: name,
                src: photo
            })
        }
        fetch(url,animals)
            .then(item=>{console.log(item.json())})
    }
    return(
        <span>
        <Button variant={'warning'} onClick={updateAnimals}>Update</Button>
        </span>
    )
}
export default UpdateAnimal

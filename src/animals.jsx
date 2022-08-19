import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import UpdateAnimal from "./updateAnimal";
import DeleteAnimal from "./deleteAnimal";
function Animals(){
    const [id, setId]=useState('')
    const [name, setname]=useState('')
    const [photo, setPhoto]=useState('')
    const [item,setItem]=useState([])
    useEffect(()=>{
        const url='http://localhost:3000/peoples'
        fetch(url)
            .then(res=>res.json())
            .then((rezult)=>{
                setItem(rezult)
            })
    })
        function loadingId(e) {
        console.log(e.target.value)
            setId(e.target.value)

        }
    function loadingName(e){
        console.log(e.target.value)
        setname(e.target.value)
    }
    function loadingPhoto(e){
        console.log(e.target.value)
        setPhoto(e.target.value)
    }
    function addTo(){
        const item= {
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                id: id,
                name: name,
                src: photo
            })
        }
        const url='http://localhost:3000/peoples'
        fetch(url,item)
            .then(resp=>{console.log(resp.json())})
        setId('');setname('');setPhoto('')
    }
    return (
        <div>
            <h1>Hello I`m animals</h1>
            <input type={'number'} onInput={loadingId} value={id} placeholder={"id"}/>
            <input type={'text'} onInput={loadingName} value={name} placeholder={"name"}/>
            <input type={'text'} onInput={loadingPhoto} value={photo} placeholder={"photo"}/>
            <Button variant={'info'} onClick={addTo}>Add to</Button>
            <div className={'cards'}>

                {item.map(items=>(
                    <div key={items.id} className={'card'}>{items.id}
                        <div>{items.name}</div>
                        <div className={"imageLeon"}>
                        <img src={items.src}/>
                        </div>
                        <div>
                            <UpdateAnimal id={items.id}/>
                            <DeleteAnimal id={items.id}/>
                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}
export default Animals

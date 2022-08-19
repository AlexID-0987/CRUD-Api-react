import {useEffect, useState} from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";
import UpdateItem from "./updateItem";
import DeleteItem from "./deleteItem";
import {Button} from 'react-bootstrap'
  function Webapi() {
      const state=['Is Loaded']
      const [id,setId]=useState('')
      const [name,setName]=useState('')
      const [item,setItem]=useState(state)
      useEffect(()=>{
          const url='http://localhost:3000/cars'
          axios.get(url).then((resp)=>{
              const it=resp.data
              console.log(it)
              setItem(it)
          })
      },[setItem])
      function loadId(event){
          setId(event.target.value)
      }
      function loadName(event){
         console.log(event.target.value)
          setName(event.target.value)
      }
      function add(){
          const item={id:id,name:name}
          const url='http://localhost:3000/cars'
          axios.post(url,item)
              .then(resp=>{console.log(resp)})
          setId('')
          setName('')
      }

       return (
            <div>
                <h1>I`m WEB</h1>
                <div>
                <input className="mb-3" type='text' onInput={loadId} value={id} placeholder='id'/>
                <input type='text' onInput={loadName} value={name} placeholder='name'/>
                    <Button onClick={add} variant="info">Add</Button>
                </div>
                <div className={'container mt-5'}>

                  <Table striped bordered hover>
                   <thead>
                   <tr>
                       <th>ID</th>
                       <th>NAME</th>
                       <th>Update</th>
                       <th>Delete</th>
                   </tr>
                   </thead>
                      <tbody>

                    {item.map((car)=>
                        <tr key={car.id}>
                            <td>{car.id}</td>
                             <td>{car.name}</td>
                             <td><UpdateItem id={car.id} /></td>
                            <td><DeleteItem id={car.id}/></td>
                        </tr>
                    )}

                      </tbody>
                  </Table>
                    </div>

            </div>
       )

}
export default Webapi

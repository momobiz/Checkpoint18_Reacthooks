import React,{useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const AddMovie = ({addToList}) => {
    const [titre, setTitre]=useState('');
    const [description,setDescription]=useState('');
    const [url,setUrl]=useState('');
    const [note, setNote]=useState(0);
 
    const buildMovie=()=>{
        let newMovie={
            title:titre,
            description:description,
            posterUrl:url,
            rate:note
        }
        addToList(newMovie);
      document.getElementById('modalTitre').value='';
      document.getElementById('modalDescription').value='';
      document.getElementById('modalUrl').value='';
      document.getElementById('modalNote').value=0;
      

    }
   
  




    return (
        
     
  <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title style={{marginLeft:"15px"}}> Ajouter un film </Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <input id="modalTitre" type="text" className="form-control" aria-label="Sizing example input"
         aria-describedby="inputGroup-sizing-default" placeholder="Titre"
         onChange={(event)=>setTitre(event.target.value)}></input>
    <input id="modalDescription" type="text" className="form-control" aria-label="Sizing example input"
         aria-describedby="inputGroup-sizing-default" placeholder="Description"
         onChange={(event)=>setDescription(event.target.value)}></input>
     <input id="modalUrl" type="text" className="form-control" aria-label="Sizing example input"
         aria-describedby="inputGroup-sizing-default" placeholder="posterUrl"
         onChange={(event)=>setUrl(event.target.value)}></input>
     <select id="modalNote" className="custom-select col-sm-12 form-control" 
     onChange={(event)=>setNote(event.target.value)} >
                <option value="0"> Note </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
        </select>

    
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary" onClick={buildMovie}>Ajouter</Button>
    
    
  </Modal.Footer>

</Modal.Dialog> 
      
         
        
    );
}

export default AddMovie;

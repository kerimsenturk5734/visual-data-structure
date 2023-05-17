import { useNavigate } from 'react-router-dom';
import '../css/mymodal.css'
import { useState } from 'react';

export default function MyDialog({value}) {
    const [isOpen,setIsOpen] = useState(value);
    const navigate = useNavigate();
    let modal = document.getElementById("myModal");

    const confirm = ()=>{
      localStorage.clear();
      document.getElementById("text-content").textContent = "Çıkış yapılıyor...";
      navigate("/",2000);
    }

    const cancel=()=>{
      modal.style.display = "none";
      setIsOpen(false);
    }

    if(value){      
        modal.style.display = "block";
    }

    return (
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={cancel}>&times;</span>
          <p id="text-content">Some text in the Modal..</p>
        </div>
      </div>
    )
}
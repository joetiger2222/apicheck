import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  function getCities(){
    fetch(`http://3algny.somee.com/api/Clinic/Cities`)
    .then(res=>res.ok?res.json():alert('error'))
    .then(data=>console.log(data))
  }
  useEffect(()=>{
    getCities();
  },[])
  return (
    <div>
      
    </div>
  );
}

export default App;

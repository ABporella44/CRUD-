import './App.css';
import React, { useEffect, useState } from "react";
import Axios from 'axios';






function App() {

  const [movieName, setMovieName] = useState(" ");
  const [movieReview, setMovieReview] = useState(" ");
  const enterMovieName =(e) =>{setMovieName(e.target.value)}
  const enterMoviereview =(e) =>{setMovieReview(e.target.value)}

  const submit = (e) => {
    Axios.post("http://localhost:3001/insert/api",{ID:2,movieName:movieName,movieReview:movieReview}).then(()=>{
      alert("Successfull Insert");
    })
  }

  return (
    <div className="App">
     <h1>Crud Application</h1>
     <div className="form">
      <label>MovieName:</label>
       <input onChange={enterMovieName} type="text" name="movieName"/> <br/>
       <label>Review:</label>
       <input onChange={enterMoviereview} type="text" name="review"/>  <br/>
       <button onClick={submit}>Submit</button>
     </div>
     </div>
  );
}

export default App;

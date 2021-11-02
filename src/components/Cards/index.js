import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "./style.css";


const Cards = () => {
  const [arr] = useState([
    {
      id: "0",
      name: "Heart",
      img: "./heart.jpg",
      disc: "Heart Card",
    },
    {
      id: "1",
      name: "Club",
      img: "./club.png",
      disc: "Club Card",
    },
    {
      id: "2",
      name: "Spade",
      img: "./spade.png",
      disc: "Spade Card",
    },
    {
      id: "3",
      name: "Diamond",
      img: "./diamond.png",
      disc: "Diamond Card",
    },
  ]);

  const history = useHistory()

  const gitPath=(id)=>{
      history.push(`/Card/${id}`);
    
  } 
  const searchPath=(e)=>{
    //   console.log(e.target.search.value);
    history.push(`/Search/${e.target.search.value}`);
  }



  

  return (
    <div >
   <form onSubmit={searchPath}>
            <input  type="text"  name="search" placeholder="Search... "/>
            <button>Search</button>
        </form>
      {arr.map((elem) => (
        <div key={elem.id} onClick={()=>{gitPath(elem.id)}}>
          <img src={require(`${elem.img}`).default} alt={`card ${elem.name}`} />
          <h2> {elem.name} </h2>
        </div>
      ))}
    </div>
  );
};
export default Cards;

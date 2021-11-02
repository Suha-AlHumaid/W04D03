import React from "react";
import { useState } from "react";
// import { useParams, useHistory } from "react-router";
import "./style.css";

const Favorite = () => {
  const [searchArr] = useState([
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
  
  const history = useHistory();

  const gitPath = (id) => {
    history.push(`/Card/${id}`);
  };
  return (
    <div>
      <h1>Favorite Section</h1>
{/* 
      {result.map((elem) => (
        <div
          key={elem.id}
          onClick={() => {
            gitPath(elem.id);
          }}
        >
          <img src={require(`${elem.img}`).default} alt={`card ${elem.name}`} />
          <h2> {elem.name} </h2>
        </div>
      ))} */}
    </div>
  );
};
export default Favorite;

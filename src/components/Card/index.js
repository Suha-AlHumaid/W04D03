import React from 'react'
import { useState } from "react";
import { useParams } from "react-router";
import './style.css'
 const Card = () => {
    const [arr, setArr] = useState([
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
    return (
        <div>
            <h1>card</h1>
        </div>
    )
}
export default Card

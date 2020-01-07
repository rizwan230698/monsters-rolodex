import React from "react";
import "./Card.css";
const Card = ({ monster }) => (
  <div className="Card-Container">
    <img
      alt="monster"
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);

export default Card;

import React from "react";
import "./Cards.css";
import { cardsData } from "../../../../data/Data";
import Card from "./card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
        <div className="parentContainer" style={{ boxShadow: " 3px 4px 11px 0px #626262" }} key={id}>
            <Card
              title={card.title}
              percentage={card.percentage}
              value={card.value}
              png={card.png}
              imgback={card.imgback}
            />
        </div>
        );
      })}
    </div>
  );
};

export default Cards;
import React from "react";

import "./Card.css";

const HIDDEN_SYMBOL = "❓"; 
 
// const Card = () => <div className="card" />

const Card = ({card,feedback,onClicked}) => (
    <div className={`card ${feedback}`} onClick = {() => {onClicked(card)}}>
        <span className="symbol">
            {feedback === 'hidden'? HIDDEN_SYMBOL:card}
        </span>
    </div>);

export default Card;

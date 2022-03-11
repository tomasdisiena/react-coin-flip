import React from "react";
import "./Coin.css";

const Coin = (props) => {
    return (
        <div className='Coin'>
            <img src={props.info.imgSrc} alt={props.info.side} />
        </div>
    );
}


export default Coin;
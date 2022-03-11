import React, { useState } from "react";
import Coin from "./Coin";
import './CoinsContainer.css';

const coins = [
    { side: "tails", imgSrc: "https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png" },
    { side: "heads", imgSrc: "https://www.nicepng.com/png/full/395-3951330_thecoinspot-com-us-washington-head-quarter-dollar-coin.png" }
]

const CoinsContainer = () => {

    const [currCoin, setCurrCoin] = useState(null)
    const [nFlips, setNFlips] = useState(0)
    const [nHeads, setNHeads] = useState(0)
    const [nTails, setNTails] = useState(0)

    const flip = () => {
        let randomIndex = Math.floor(Math.random() * coins.length);
        setCurrCoin(coins[randomIndex]);
        setNFlips(nFlips + 1)
        if (coins[randomIndex].side === 'tails') {
            setNTails(nTails + 1)
        } else {
            setNHeads(nHeads + 1)
        }
    }

    return (
        <div className='CoinsContainer'>
            <h1>Coin Flipper</h1>
            {currCoin && <Coin info={currCoin} />}
            <button onClick={flip}>FLIP!</button>
            <div className="CoinsContainer-info">
                <p>
                    Total Flips: {nFlips}
                </p>
                <p>
                    Heads: {nHeads}
                </p>
                <p>
                    Tails: {nTails}
                </p>
            </div>
        </div>
    );
}



export default CoinsContainer;
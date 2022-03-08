import React from "react";
import Coin from "./Coin";
import flip from "./flip";
import './CoinsContainer.css';

class CoinsContainer extends React.Component {
    static defaultProps = {
        coins: [
            { side: "tails", imgSrc: "https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png" },
            { side: "heads", imgSrc: "https://www.nicepng.com/png/full/395-3951330_thecoinspot-com-us-washington-head-quarter-dollar-coin.png" }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    setCoin() {
        const newCoin = flip(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            };
        });
    }

    handleClick(e) {
        this.setCoin();
    }

    render() {
        return (
            <div className='CoinsContainer'>
                <h1>Coin Flip</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>FLIP!</button>
                <div className="CoinsContainer-info">
                    <p>
                        Total Flips: {this.state.nFlips}
                    </p>
                    <p>
                        Heads: {this.state.nHeads}
                    </p>
                    <p>
                        Tails: {this.state.nTails}
                    </p>
                </div>
            </div>
        );
    }
}


export default CoinsContainer;
import React from 'react';
import Select from 'react-select';
import Board from './Board';
import ShoppingList from './ShoppingList'

class Game extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div>{/*status*/}</div>
                    <ul>{/*todo*/}</ul>
                </div>
            </div>
        );
    }
}

export default Game;

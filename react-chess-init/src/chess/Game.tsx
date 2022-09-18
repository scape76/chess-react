import React, {useState, useEffect} from 'react';
import BoardComponent from "./components/BoardComponent";
import {Board} from "../models/Board";
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";
import LostFigures from "./components/LostFigures";
import {useLoaderData} from "react-router-dom";

export function loader(): Board {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    return newBoard;
}

const Game = () => {
    const newBoard = useLoaderData() as Board;
    const [board, setBoard] = useState<Board>(newBoard);
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null> (null)

    useEffect(() => {
        setCurrentPlayer(whitePlayer);
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setCurrentPlayer(whitePlayer);
        setBoard(newBoard);

    }

    function swapPlayer(): void {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
    }


    return (
        <div className="app__chess">
            <button className="restart__btn" onClick={restart}>
                Restart
            </button>
            <BoardComponent
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                swapPlayer={swapPlayer}/>
            <div>
                <LostFigures title="Black figures" figures={board.lostBlackFigures}/>
                <LostFigures title="White figures" figures={board.lostWhiteFigures}/>
            </div>
        </div>
    )
}

export default Game;

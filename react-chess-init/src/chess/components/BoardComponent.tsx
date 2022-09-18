import React, {FC, useEffect, useState} from 'react';
import { Board } from '../../models/Board';
import CellComponent from './CellComponent';
import {Cell} from "../../models/Cell";
import {Player} from "../../models/Player";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}


const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highlightAvailableCells()
  }, [selectedCell])

  function handleCellClick(cell: Cell) {
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
    } else {
      if(cell.figure?.color == currentPlayer?.color)
        setSelectedCell(cell)
    }
  }

  function highlightAvailableCells() {
    board.highlightAvailableCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
      <div className="main">
        <h3 className="title"> Current Player: {currentPlayer?.color}</h3>
        <div className='board'>
          {board.cells.map((row, index) =>
            <React.Fragment key={index}>
              {row.map(cell =>
              <CellComponent
                  cell={cell}
                  key={cell.id}
                  selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                  handleCellClick={handleCellClick}/>
              )}

            </React.Fragment>
            )}
        </div>
      </div>
  );
};

export default BoardComponent;
import React, { useEffect, useCallback, useState, useMemo } from "react";
import Header from "../../components/Header";
import Piece from "./Piece";
import * as S from "./styles";

const Chess: React.FC = () => {
  const boardSize = 8;
  const letras = ["a", "b", "c", "d", "f", "g", "h", "j"];

  const [turn, setTurn] = useState(true);

  const changeTurn = () => {
    setTurn((turn) => !turn);
  };

  const colorTurn = useMemo(() => {
    return turn ? "white turn" : "black turn";
  }, [turn]);

  const addTable = useCallback((place: string) => {
    let chessTable;
    if (place === "board") {
      chessTable = document.querySelector("#board");
    }
    if (place === "overlay") {
      chessTable = document.querySelector("#overlay");
    }

    var board = document.createElement("TABLE");
    var boardBody = document.createElement("TBODY");
    if (place === "overlay") {
      board.setAttribute("id", "tableOverlay");
    }
    board.appendChild(boardBody);
    for (var i = 0; i < boardSize; i++) {
      var tr = document.createElement("TR");
      boardBody.appendChild(tr);

      for (var j = 0; j < boardSize; j++) {
        var td = document.createElement("TD");
        if (place === "overlay") {
          td.setAttribute("id", `${i + 1}-${letras[j].toUpperCase()}`);
        }
        tr.appendChild(td);
      }
    }
    if (!chessTable) return;
    chessTable.appendChild(board);
  }, []);

  useEffect(() => {
    const chessTable = document.querySelector("#tableOverlay");
    if (chessTable) return;
    addTable("board");
    addTable("overlay");
  }, []);

  return (
    <main>
      <Header />
      <S.ContentWrapper>
        <S.ChessTable className="game" id="board">
          <S.ChessOverlay id="overlay"></S.ChessOverlay>
        </S.ChessTable>
      </S.ContentWrapper>
    </main>
  );
};

export default Chess;

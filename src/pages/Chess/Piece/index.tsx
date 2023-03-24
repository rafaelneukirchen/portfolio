import React from "react";
import * as S from "./styles";

export interface PieceProp {
  type: "queen" | "king" | "bisp" | "tower" | "horse" | "peon";
  status: boolean;
}

const Piece: React.FC<PieceProp> = ({ type }) => {
  return <S.Piece data-type={type}></S.Piece>;
};

export default Piece;

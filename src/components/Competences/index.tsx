import React from "react";
import * as S from "./styles";

interface CompetencesProps {
  data: string[];
}

const Competences: React.FC<CompetencesProps> = ({ data }) => {
  return (
    <S.CompetenceWrapper>
      {data.map((competence, i) => {
        return (
          <S.Competence index={i} key={i}>
            <div>
              {(i + 1).toLocaleString("pt-BR", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </div>{" "}
            <span>{competence}</span>
          </S.Competence>
        );
      })}
    </S.CompetenceWrapper>
  );
};

export default Competences;

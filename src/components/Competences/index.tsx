import React from "react";
import { useInView } from "react-intersection-observer";
import * as S from "./styles";

interface CompetencesProps {
  data: string[];
}

const Competences: React.FC<CompetencesProps> = ({ data }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <S.CompetenceWrapper ref={ref} className={inView ? "animate" : ""}>
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

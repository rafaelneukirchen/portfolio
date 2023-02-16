import React, { useEffect } from "react";
import Typed from "typed.js";
import { careerProjects } from "../../careerprojects";
import Competences from "../Competences";
import * as S from "./styles";

interface ProjectProps {
  actualSlide: number;
}

const Project: React.FC<ProjectProps> = ({ actualSlide: i }) => {
  const data = careerProjects;

  return (
    <S.Project key={i}>
      <S.ProjectTitle>
        <h2 className="typer">
          {data[i].name} <span>{data[i].year}</span>
        </h2>
        <h3>{data[i].company}</h3>
      </S.ProjectTitle>
      <Competences data={data[i].competences}></Competences>
      <S.TextWrapper>
        <p>{data[i].text}</p>
      </S.TextWrapper>
    </S.Project>
  );
};

export default Project;

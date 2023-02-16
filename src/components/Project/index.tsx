import React, { useState, useEffect } from "react";
import { careerProjects } from "../../careerprojects";
import Competences from "../Competences";
import * as S from "./styles";
import tippy from "tippy.js";
import {
  FaElementor,
  FaGitAlt,
  FaPhp,
  FaReact,
  FaSass,
  FaWordpressSimple,
  FaYoast,
} from "react-icons/Fa";
import { SiStyledcomponents, SiTypescript } from "react-icons/Si";
import { TbBrandNextjs } from "react-icons/tb";
import "tippy.js/dist/tippy.css";
import { AiOutlineHtml5 } from "react-icons/ai";
interface ProjectProps {
  actualSlide: number;
}

const Project: React.FC<ProjectProps> = ({ actualSlide: i }) => {
  const data = careerProjects;
  const [competences, setCompetences] = useState<any[]>(data[i].competences);

  useEffect(() => {
    setCompetences(data[i].competences);
    data[i].competences.forEach((competence) => {
      setTimeout(() => {
        tippy(`#${competence.toLowerCase().replace(/\s/g, "")}`, {
          content: competence,
          arrow: true,
        });
      }, 200);
    });
  }, [data, i]);
  return (
    <S.Project id="skills" key={i}>
      <S.ProjectTitle>
        <h2 className="typer">
          {data[i].name} <span>{data[i].year}</span>
        </h2>
        <h3>{data[i].company}</h3>
      </S.ProjectTitle>
      <Competences data={data[i].competences}></Competences>
      <S.TextWrapper>
        <>
          <p>{data[i].text}</p>
          <S.CompetenceFigures>
            {competences.map((competence, i) => {
              if (competence.toLowerCase() === "reactjs")
                return (
                  <FaReact
                    key={i}
                    id={competence.toLowerCase().replace(/\s/g, "")}
                    size={32}
                  />
                );
              if (competence.toLowerCase() === "nextjs")
                return (
                  <TbBrandNextjs
                    key={i}
                    id={competence.toLowerCase().replace(/\s/g, "")}
                    size={32}
                  />
                );
              if (
                competence.toLowerCase().replace(/\s/g, "") ===
                "styledcomponents"
              )
                return (
                  <SiStyledcomponents
                    key={i}
                    id={competence.toLowerCase().replace(/\s/g, "")}
                    size={32}
                  />
                );
              if (
                competence.toLowerCase() === "sass" ||
                competence.toLowerCase().replace(/\s/g, "") === "node-sass"
              )
                return (
                  <FaSass
                    key={i}
                    id={competence.toLowerCase().replace(/\s/g, "")}
                    size={32}
                  />
                );
              if (competence.toLowerCase() === "typescript")
                return (
                  <SiTypescript
                    key={i}
                    id={competence.toLowerCase().replace(/\s/g, "")}
                    size={32}
                  />
                );
              if (
                competence.toLowerCase() === "seo" ||
                competence.toLowerCase().replace(/\s/g, "") === "yoastseo"
              )
                return (
                  <FaYoast
                    key={i}
                    id={competence.toLowerCase().replace(/\s/g, "")}
                    size={32}
                  />
                );
              if (competence.toLowerCase() === "git")
                return (
                  <FaGitAlt
                    key={i}
                    id={competence.toLowerCase().replace(/\s/g, "")}
                    size={32}
                  />
                );
              if (competence.toLowerCase() === "wordpress")
                return (
                  <FaWordpressSimple
                    key={i}
                    id={competence.toLowerCase().replace(/\s/g, "")}
                    size={32}
                  />
                );
              if (competence.toLowerCase() === "html5")
                return (
                  <AiOutlineHtml5
                    key={i}
                    id={competence.toLowerCase().replace(/\s/g, "")}
                    size={32}
                  />
                );
              if (competence.toLowerCase() === "php")
                return (
                  <FaPhp
                    key={i}
                    id={competence.toLowerCase().replace(/\s/g, "")}
                    size={32}
                  />
                );
              if (competence.toLowerCase() === "elementor")
                return (
                  <FaElementor
                    key={i}
                    id={competence.toLowerCase().replace(/\s/g, "")}
                    size={32}
                  />
                );
            })}
          </S.CompetenceFigures>
        </>
      </S.TextWrapper>
    </S.Project>
  );
};

export default Project;

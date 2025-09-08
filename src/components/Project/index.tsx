import React, { useState, useEffect } from "react";
import careerProjects from "../../careerprojects";
import Competences from "../Competences";
import * as S from "./styles";
import tippy from "tippy.js";
import {
  FaAngular,
  FaElementor,
  FaGitAlt,
  FaPhp,
  FaReact,
  FaSass,
  FaWordpressSimple,
  FaYoast,
} from "react-icons/Fa";
import { SiAdobephotoshop, SiMysql, SiNodedotjs, SiOracle, SiStyledcomponents, SiTypescript, SiZoho } from "react-icons/Si";
import { TbBrandNextjs } from "react-icons/tb";
import "tippy.js/dist/tippy.css";
import { AiOutlineHtml5 } from "react-icons/ai";
interface ProjectProps {
  actualSlide: number;
}

const Project: React.FC<ProjectProps> = ({ actualSlide: i }) => {
  const data = careerProjects;
  const [competences, setCompetences] = useState<any[]>(data[i].competences);

  const iconMap: Record<string, React.ElementType> = {
    react: FaReact,
    angular: FaAngular,
    nextjs: TbBrandNextjs,
    styledcomponents: SiStyledcomponents,
    sass: FaSass,
    "node-sass": FaSass,
    typescript: SiTypescript,
    nodejs: SiNodedotjs,
    seo: FaYoast,
    yoastseo: FaYoast,
    git: FaGitAlt,
    wordpress: FaWordpressSimple,
    html5: AiOutlineHtml5,
    php: FaPhp,
    oracle: SiOracle,
    mysql: SiMysql,
    zoho: SiZoho,
    photoshop: SiAdobephotoshop,
    elementor: FaElementor,
  };

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
            <>
              {competences.map((competence, i) => {
                const key = competence.toLowerCase().replace(/\s/g, "");
                const Icon = iconMap[key];
                if (!Icon) return null;
                return (
                  <Icon
                    key={i+competence}
                    id={key}
                    size={32}
                  />
                );
              })}
            </>
          </S.CompetenceFigures>
        </>
      </S.TextWrapper>
    </S.Project>
  );
};

export default Project;

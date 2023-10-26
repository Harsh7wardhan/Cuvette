import React from "react";
import Heading from "../components/Basics/Heading";
import Graph from "../components/Skills/Graph";
import IndividualTest from "../components/Skills/IndividualTest";
import Question from "../components/Skills/Question";
import SyllabusAnalysis from "../components/Skills/SyllabusAnalysis";

const Skills = () => {
  return (
    <div className="skill-tests">
      <Heading heading="Skill Tests" />
      <div className="skills-main">
        <IndividualTest />
        <SyllabusAnalysis />
        <Question />
        <Graph />
      </div>
    </div>
  );
};

export default Skills;

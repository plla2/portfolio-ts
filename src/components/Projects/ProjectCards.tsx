import { LazyMotion, domAnimation } from "framer-motion";
import { projects } from "../../constant/Const";
import "./styles.css";

import ProjectSingle from "./ProjectSingle";

const ProjectCards = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex gap-14 justify-center">
        {projects.map((item) => {
          return <ProjectSingle item={item} key={`${item.id}`} />;
        })}
      </div>
    </LazyMotion>
  );
};

export default ProjectCards;

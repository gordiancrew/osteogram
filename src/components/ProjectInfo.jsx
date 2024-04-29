import Footer from "./utils/Footer";
import Header from "./utils/Header";
import "./Info.css";
import { projectData } from "../data/ProjectData";
import { Link } from "react-router-dom";

function ProjectInfo(props) {
  return (
    <>
      <Header />
      <Footer />
      <h2>
        <span style={{ color: "orange" }}>
          {projectData[props.project].type}{" "}
        </span>
        {projectData[props.project].name}
      </h2>
      <div className="content">
        <div className="box-image">
          <img className="image" src={projectData[props.project].img} />
        </div>
        <div className="box-description">
          <div className="desc-info">{projectData[props.project].desc}</div>
        </div>
      </div>
      <div className="box-info">
        <span style={{ color: "orange" }}>Deploy: </span>
        <Link to={projectData[props.project].deploy}>
          <span style={{ textDecoration: "underline" }}>
            {projectData[props.project].deploy}
          </span>
        </Link>
      </div>
      <div className="box-info">
        <span style={{ color: "orange" }}>GitHub: </span>
        <span style={{ textDecoration: "underline" }}>
          {projectData[props.project].github}
        </span>
      </div>
      <div className="box-info">
        <div>
          <span style={{ color: "orange" }}>{'Technology: '}</span>
          {projectData[props.project].technology}
        </div>
      </div>
      <div className="box-info"></div>
    </>
  );
}

export default ProjectInfo;

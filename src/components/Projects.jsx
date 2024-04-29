import Header from "./utils/Header";
import Footer from "./utils/Footer";
import "./Projects.css";
import { projectData } from "../data/ProjectData";
import { Link } from "react-router-dom";

function Projects(props) {
  return (
    <>
      <Header />
      <Footer />
      <div className="projects">
        {projectData.map((item,index) => (
          
          <li onClick={()=>{props.setProject(index)}} key={item.name} className="project">
            <Link to={"/info"}>
              <div  className="project-frame">
                <img className="project-image" src={item.img} />
              </div>
              <div className="project-info">
                <div className="project-type">{item.type}</div>
                <div>{'"' + item.name + '"'}</div>
              </div>
            </Link>
          </li>
        ))}
      </div>
    </>
  );
}

export default Projects;

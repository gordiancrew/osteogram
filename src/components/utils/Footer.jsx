import { Link } from "react-router-dom";
import "./Header.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer() {
  const menuArr = [
    { name: "github", image: github, link: "https://github.com/gordiancrew" },
    { name: "linkedin", image: linkedin, link: "https://www.linkedin.com/in/uladzimir-kazantsau/" },
  ];
  return (
    <>
      <div className="footer">
      
        {menuArr.map((item) => (
          <li key={item.name} className="header__item-footer">
            <Link to={item.link}>
              <img className="icons" src={item.image} alt="Logo" />
            </Link>
          </li>
        ))}
      </div>
    </>
  );
}

export default Footer;

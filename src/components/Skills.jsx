import Footer from "./utils/Footer";
import Header from "./utils/Header";
import "./Home.css";

function Skills() {
  return (
    <>
      <Header />
      <Footer />
      <div className="content">
        <div className="content-box content-box-down box-list">
          <h3 style={{ color: 'rgb(254, 155, 98) '}}>Образование:</h3>
          <h4>⬥БГУФК 2006-2011</h4>
          <h4>⬥Epam UpSkill lab Java  2020-2021</h4>
          <h4>⬥RS School JS Front-end  2022</h4>
          <h4>⬥RS School React 2023</h4>
        </div>
        <div className="content-box content-box-down box-list">
          <h3 style={{ color: 'rgb(254, 155, 98) ' }}>Стек технологий:</h3>
          <h4>⬥JS, TS, HTML, CSS</h4>
          <h4>⬥React, React Native</h4>
          <h4>⬥Java, Spring framework, SQL</h4>
          <h4>⬥Git, OOP, Patterns</h4>
        </div>
      </div>
    </>
  );
}

export default Skills;

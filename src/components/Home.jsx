import Footer from "./utils/Footer";
import Header from "./utils/Header";
import Card from "./utils/Card";
import "./Home.css";
import foto from "../assets/foto.jpg";
const SUMMARY_TEXT =
  "Привет! Меня зовут Владимир. Я живу в городе Минске. Я долгое время работал в сфере медицины и спорта. Несколько лет назад я начал обучаться программированию. Изначально это был язык java, позже я начал учиться на frontend разработчика. На данный момент я junior frontend developer. В этом проекте я описал свое обучение и мои проекты. ";

function Home() {
  return (
    <>
      <Header />
      <Footer />
      <h2>главная страница</h2>
      <div className="content">
        
        <Card />
        <Card />
        <Card />
        
        {/* <div className="content-box">
          <div className="foto-frame">
            <img className="foto" src={foto} alt="photo" />
          </div>
          <h2>Uladzimir Kazantsau</h2>
          <h3>front-end developer</h3>
        </div> */}
        {/* <div className="content-box content-box-down">
          <h4>Обо мне:</h4>
          {SUMMARY_TEXT}</div> */}
      </div>
    </>
  );
}

export default Home;

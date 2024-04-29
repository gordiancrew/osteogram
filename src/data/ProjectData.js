import mill from "../assets/mill.jpg";
import store from "../assets/store.jpg";
import firj from "../assets/firj.jpg";
import dolfin from "../assets/dolfin.jpg";
import morty from "../assets/morty.jpg";
import book from "../assets/book.jpg";

export const headerData = [
  { name: "главная", url: "", link: "/" },
  // { name: "skills", url: "skills", link: "/skills" },
  // { name: "projectswww", url: "projects", link: "/projects" },
  { name: "медицинские центры", url: "medcenters", link: "/medcenters" },

  { name: "профилактика боли", url: "prof", link: "/prof" },
  { name: "суставная гимнастика", url: "#", link: "/" },
  { name: "первая помощь", url: "#", link: "/" },
  { name: "мед туризм", url: "#", link: "/" },
  { name: "подписка", url: "#", link: "/" },
  { name: "статьи ", url: "#", link: "/" },
  { name: "о_нас", url: "#", link: "/" },

];

export const projectData = [
  {
    type: "mobile app",
    name: "Minsk city quest",
    technology: "React Native, JavaScript",
    github: "https://github.com/gordiancrew/quiz",
    deploy:
      "https://play.google.com/store/apps/details?id=com.gordiancrew.quiz&hl=ru&gl=US",
    img: firj,
    desc: "Мобильное приложение в стиле городской квест. Пользователь передвигается по городу и отвечает на вопросы по текущим локациям. ",
  },
  {
    type: "logic game",
    name: " Who wants to be a programmer?",
    technology:
      "React, TypeScript, routing, internacionalization, authorization, LocalStorage, adaptive, sound, synthez voice ",
    github: "https://github.com/gordiancrew/rs-millioner/pull/69",
    deploy: "https://rs-school-millioner.netlify.app/",
    img: mill,
    desc: "Web приложение викторина, выполнен в команде из 3 человек где я был team leader. Является аналогом игры кто хочет стать миллионером. Вопросы в викторине по теории javaScript",
  },
  {
    type: "study project",
    name: "online-store",
    technology:
      "Webpack, TypeScript, Team work, routing, SPA, classes, OOP, api",
    github: "https://github.com/gordiancrew/online-store/pull/29",
    deploy: "https://online-s-t-o-r-e.netlify.app/",
    img: store,
    desc: "Учебный проект, онлайн магазин. Выполнен в командной работе из 2 человек. Использовано взаимодействие с back end. Есть фильтры товаров, корзина заказов, иммитация оплаты. ",
  },
  {
    type: "AI project",
    name: "dolphin",
    technology: "React, chatGPT api, JavaScript",
    github: "#",
    deploy: "https://effortless-basbousa-9a96e7.netlify.app/",
    img: dolfin,
    desc: "Проект для создания документации для product-manager, со внедрением искусственного интеллекта.",
  },
  {
    type: "study project",
    name: "rick and morty",
    technology: "React, TypeScript, routing, API, REST, redux,forms, hooks",
    github: "https://github.com/gordiancrew/rs-school-react/pull/5",
    deploy: "https://curious-mandazi-929c54.netlify.app/",
    img: morty,
    desc: "Учебный проект для работы с готовым API, получение данных, фильтрация, создание данных",
  },
  {
    type: "AI project",
    name: "Books expert",
    technology: "React, chatGPT api, JavaScript,forms, pdf-loader",
    github: "#",
    deploy: "https://mellifluous-dango-f38b0d.netlify.app/",
    img: book,
    desc: "Проект отвечает на вопросы и преобразует содержимое из загруженного PDF файла, с использованием искусственного интеллекта.",
  },
];

import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader.js"; // Імпортуйте компонент прелоадера
import About from "./components/About/About.js";
import Cards from "./components/Cards/Cards.js";
import Circle from "./components/Circle/Circle.js";
import UserForm from "./components/UserForm/UserForm.js";
import Header from "./components/Header/Header.js";
import Title from "./components/Title/Title.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    },860);
  }, []);

  return (
    <div>
      {contentLoaded ? (
        <div>
          <Header />
          <Title />
          <About />
          <Cards />
          <Circle />
          <UserForm />
          <Footer />
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default App;

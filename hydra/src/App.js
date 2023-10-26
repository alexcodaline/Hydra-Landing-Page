import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader/Preloader'; // Імпортуйте компонент прелоадера
import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Circle from "./components/Circle/Circle";
import UserForm from "./components/UserForm/UserForm";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 2000); 
  }, []);

  return (
    <div className="wrapper">
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
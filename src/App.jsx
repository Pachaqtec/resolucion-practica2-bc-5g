import Header from "./components/Header";
import SchoolCourses from "./components/SchoolCourses";
import SchoolStats from "./components/SchoolStats";
import Universities from "./components/Universities";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Prices from "./components/Prices";
import Footer from "./components/Footer";

// Todos los emelentos establecidos fuera del compoenente solo existen la primera vez que recarga la pagina.
// console.log("Hola Mundo");

function App() {
  // console.log("Hola Mundo C");
  const numero = 10;

  return (
    <div className="container">
      <Header data="Jose Fernando" number={numero} />
      <Universities />
      <SchoolStats />
      <SchoolCourses />
      <Education />
      <Testimonials />
      <Prices />
      <Footer>
        <p>Hola Mundo</p>
      </Footer>
    </div>
  );
}

export default App;

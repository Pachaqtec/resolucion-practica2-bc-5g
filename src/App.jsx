import Header from "./components/Header";
import SchoolCourses from "./components/SchoolCourses";
import SchoolStats from "./components/SchoolStats";
import Universities from "./components/Universities";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Prices from "./components/Prices";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Universities />
      <SchoolStats />
      <SchoolCourses />
      <Education />
      <Testimonials />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;

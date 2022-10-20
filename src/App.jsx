import Header from "./components/Header";
import SchoolCourses from "./components/SchoolCourses";
import SchoolStats from "./components/SchoolStats";
import Universities from "./components/Universities";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="container">
      <Header />
      <Universities />
      <SchoolStats />
      <SchoolCourses />
      <Education />
      <Testimonials />
    </div>
  );
}

export default App;

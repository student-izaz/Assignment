import './App.css';
import Header from "./components/Header";
import Links from './components/Links';
import Main from './components/Main';
import Facts from './components/Facts';
import Courses from './components/Courses';
import Opportunity from './components/Opportunity';
import Companies from './components/Companies';
import CertificateAndInternship from './components/Certificates&Internship';
import EnrollmentBanner from './components/EnrollmentBanner';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Links/>
        <Main/>
        <Facts/>
        <Courses/>
        <Opportunity/>
        <Companies/>
        <CertificateAndInternship/>
        <EnrollmentBanner/>
      </div>
    </>
  );
}

export default App;

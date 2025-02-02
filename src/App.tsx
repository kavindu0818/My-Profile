// import React from "react";
// import Banner from "./components/banner/Banner.tsx";
// import Navbar from "./components/navbar/Navbar.tsx";
// import Banner from "./components/banner/Banner.tsx";


import Navbar from "./components/navbar/Navbar.tsx";
import Banner from "./components/banner/Banner.tsx";
import Aboutme from "./components/tesimonial/Aboutme.tsx";
import React from "react";
// import Education from "./components/resume/Education.tsx";
import Resume from "./components/resume/Resume.tsx";
import Features from "./components/features/Features.tsx";
import Projects from "./components/projects/Projects.tsx";
import Contact from "./components/contact/Contact.tsx";
import Skills from "./skills/Skills.tsx";
// import Features from "./components/features/Features.tsx";
// import Features from "./components/features/Features.tsx";
// import Features from "./components/features/Features.tsx";

function App() {

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Aboutme></Aboutme>
            {/*<Education/>*/}
            <Resume></Resume>
            <Skills></Skills>
            <Features></Features>
            <Projects></Projects>
            <Contact></Contact>
            {/*<Features></Features>*/}
        </div>
    );
}

export default App

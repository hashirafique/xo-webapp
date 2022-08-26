import React from "react";
import Cookie from "./components/Cookie";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageFive from "./components/PageFive";
import PageFour from "./components/PageFour";
import PageOne from "./components/PageOne";
import PageThree from "./components/PageThree";
import PageTwo from "./components/PageTwo";

function App() {
  return (
    <div >
     <Navbar />
     <Cookie/>
     <PageOne />
     <PageTwo />
     <PageThree />
     <PageFour />
     <PageFive />
     <Footer />
    </div>
  );
}

export default App;

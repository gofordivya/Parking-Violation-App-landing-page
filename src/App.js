// src/App.js
import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Introduction/Introduction";
import Benefits from "./components/Benefits/Benefits";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Weather from "./components/Weather/Weather";
import CallToAction from "./components/CallToAction/CallToAction";
import InteractiveMap from "./components/InteractiveMap/InteractiveMap";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <Introduction />
        <Benefits />
        <HowItWorks />
        <Weather />
        <CallToAction />
        <InteractiveMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;

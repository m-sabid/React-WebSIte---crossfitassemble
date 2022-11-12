import React from "react";
import "./Trainers.css";
import SharedNav from "../Shared/SharedNav";
import OurTeam from "../Shared/OurTeam/OurTeam.jsx";
import MainFooter from './../Shared/Footer/MainFooter';


const Trainers = () => {
  return (
    <div className="Trainers">
      <SharedNav />
      <div className="mid-container">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 mt-16">
          <div className="t-center">
            <h1 className="lg:text-5xl md:text-4xl text-4xl w-100 font-extrabold text-primary uppercase">
              Our Team
            </h1>
            <hr />
          </div>
        </div>

        <OurTeam />

      </div>
      <MainFooter />
    </div>
  );
};

export default Trainers;

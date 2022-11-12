import React, { useEffect, useState } from "react";
import img from "../../../assets/Image/AboutUs/abb-bg.png";
import SharedNav from "../Shared/SharedNav";
import "../../Home/About/About.css";
import MainFooter from "../Shared/Footer/MainFooter";
import ImageGallery from './ImageGallery/ImageGallery';

const AboutUs = () => {
  const [bgImage, setBgImage] = useState([]);

  // background video and images
  useEffect(() => {
    fetch(`http://crossfitassemble.xyz/api/static_file_web`)
      .then((res) => res.json())
      .then((data) => setBgImage(data.data.about_image));
  }, []);

  return (
    <div>
      <SharedNav />

      <img id="bgImage" className="w-full lg:max-h-[92vh]" src={bgImage ? bgImage : img} alt="" />
      <div>
        <div> {/*  className="mid-container" */}
          <h1 className="text-center sm:text-5xl text-2xl font-bold sm:mb-16 mb-6 mt-4 mx-auto">
            Get To Know <span className="text-primary"> CrossFit Assemble </span>
          </h1>

          <p className="border-l-[3px] border-warning mt-20 py-3 text-secondary mx-auto text-justify mid-container">
            CrossFit is a Strength & Conditioning Program that’s based on
            functional movements. The workouts are programmed in combination of
            weightlifting, gymnastics and mono structural metabolic
            conditioning. The intensity is high and workouts are different
            everyday.
          </p>

          <div className="why-us bg1 border-l-[3px] border-warning mt-20 py-3">
            <div className="ml-3">
              <h1 className="text-2xl font-bold mb-5">
                <span className="border-b-[3px] border-warning c-white">Why Us</span>
              </h1>
              <p className="text-justify c-white">
                We are the first CrossFit affiliated box in Bangladesh. We offer
                an all-around guidance to maintain a healthy lifestyle which
                encompasses physical training, nutrition coaching, stress
                management, sleep and support system.
              </p>
            </div>
          </div>

          <div className="why-us bg2 border-r-[3px] border-indigo-400 mt-20 py-3">
            <div className="mr-3 c-white">
              <h1 className="text-2xl font-bold mb-5  text-end">
                <span className="border-b-[3px] border-indigo-400 c-white">
                  Mission & Vision
                </span>
              </h1>
              <p className="text-justify c-white">
                We want to forge a community through elite functional fitness
                that drives people to be fit and live a healthy life.We envision
                to be a hub of health & fitness; a place people can rely on to
                reach their goals and a platform where they can share their
                experiences that will enlighten the path for others.
              </p>
            </div>
          </div>
          <div className="why-us bg3 border-l-[3px] border-warning mt-20 py-3">
            <div className="ml-3">
              <h1 className="text-2xl font-bold mb-5">
                <span className="border-b-[3px] border-warning c-white">
                  Core Values
                </span>{" "}
              </h1>
              <p className="text-justify">
                <h2 className="font-semibold  mt-2 text-[18px] c-white">Cooperation</h2>
                <p className="c-white">
                  Cooperation We have created a synergy by bridging between
                  coaches and clients to reach individual and collective goals.
                </p>
              </p>
              <h2 className="font-semibold mt-3 text-xl text-[18px] c-white">Growth</h2>
              <p className="c-white">
                Growth Experience makes one grow. Our premium lifestyle coaching
                is designed to navigate your journey towards personal
                development.
              </p>
              <h2 className="font-semibold mt-3 text-xl text-[18px] c-white">
                Effectiveness
              </h2>
              <p className="c-white">
                Effectiveness The results do the talking so we can focus on
                coaching.
              </p>
              <h2 className="font-semibold mt-3 text-xl text-[18px] c-white">
                Community
              </h2>
              <p className="c-white">
                It's at the heart of what we do. An energetic group with similar
                goals makes the journey worthwhile.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImageGallery />
    <MainFooter />
    </div>
  );
};

export default AboutUs;

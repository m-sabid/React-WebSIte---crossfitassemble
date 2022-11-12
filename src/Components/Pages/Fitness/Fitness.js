import React, { useEffect, useState } from "react";
import SharedNav from "../Shared/SharedNav";
import FitnessOneImage from "../../../assets/Image/Fitness/kik.png";
import FitnessTwoImage from "../../../assets/Image/Fitness/nu.png";
import Package from "../Package/Package";
import AllPackages from "../Package/AllPackage";
import { Link } from "react-router-dom";
import AuthUser from "../../../hooks/AuthUser/AuthUser";
import Loading from "../../../hooks/Loading/Loading";
import MainFooter from "../Shared/Footer/MainFooter";
import OtherProgram from "./OtherProgram";

const Fitness = () => {
  const { token, email } = AuthUser();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [bgImage, setBgImage] = useState([]);

  // background video and images
  useEffect(() => {
    fetch(`http://crossfitassemble.xyz/api/static_file_web`)
      .then((res) => res.json())
      .then((data) => setBgImage(data.data));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`http://crossfitassemble.xyz/api/users/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
        // console.log(data)
      });
  }, [token]);

  // get current user data
  let currentUser = [];
  if (userData.length > 0) {
    currentUser = userData?.filter((item) => item?.email === email);
  }

  // console.log(currentUser[0]?.is_full_active)
  return (
    <>
      <SharedNav />
      <div className="fitness_margin lg:h-[80vh] grid grid-cols-1 items-center md:grid-cols-2 gap-8 mid-container w-100">
        <div className="fitness_content z-20 order-2 md:order-1">
          {/* <span className="bg-[#dbdce0] text-xs sm:text-sm md:text-md p-2 rounded-3xl text-[#071B46]">
            <button className="btn btn-xs hover:bg-slate-400 border-0 rounded-3xl bg-white text-[#071B46]">
              NEW
            </button>{" "}
            High Intensity workout to burn calories
          </span> */}

          <h1 className="md:text-[50px] text-[50px] my-5 text-primary font-bold">
            KICK BOXING
          </h1>
          <p className="text-[#071B46] mb-5 text-justify">
            Kick boxing is a combat sport focused on kicking and punching.
            kickboxing can be practiced for general health, or as the fight
            sport. If you are seeking to improve your fitness or perfect your
            fighting technique! We have a fantastic team of coaches who are all
            experts in the field of martial arts. We have coaches who are
            seasoned martial artists with years of experience in training
            civilians looking to be more competent and professionals who needs
            to know how to deal with tight situations as part of their jobs.
          </p>
          <div className="">
            {/* <Link to={"/login"}>
              <button className="btn btn-primary text-md w-36 font-bold">
                Get Started
              </button>
            </Link> */}
            {/* <button className="btn bg-[#E5E5E5] mt-5 sm-mt-0 text-md w-36 ml-4 hover:text-white font-bold border-0 text-[#071B46]">
              Preview
            </button> */}
          </div>
        </div>
        <div className="fitness_image order-1 md:order-2 z-10 bg-[#071B46] flex items-center justify-center">
          <img src={bgImage.other_programs_image_one} alt="" />
        </div>
      </div>

      <div className="fitness_margin lg:h-[80vh] z-20 grid grid-cols-1 items-center md:grid-cols-2 gap-8 mid-container">
        <div className="fitness_image bottom_margin flex items-center justify-center pt-5">
          <img className="z-10" src={bgImage.other_programs_image_two} alt="" />
        </div>
        <div className="fitness_content right_to_left mt-0">
          <h1 className="md:text-[50px] text-[50px] my-5 text-primary font-bold">
            PERSONAL TRAINING
          </h1>
          <p className="text-[#071B46] mb-5 text-justify">
            One on one class to provide individual attention for members with
            specific needs. Pick from our list of certified coaches and hit the
            ground running
          </p>
          <div className="">
            {/* <button className="btn bg-[#E5E5E5] mt-5 sm-mt-0 text-md w-36  hover:text-white ml-4 font-bold border-0 text-[#071B46]">
              Preview
            </button> */}
            {/* <Link to={"/login"}>
              <button className="btn btn-primary text-md w-36 font-bold">
                Get Started
              </button>
            </Link> */}
          </div>
        </div>
      </div>

      <OtherProgram />

      {loading ? (
        <Loading />
      ) : (
        <>
          {currentUser[0]?.is_full_active === true && (
            <>
              <div className="mid-container">
                <h1 className="uppercase mt-16 mb-5 text-primary font-extrabold text-3xl ">
                  recomended
                  <br /> packeges for you
                </h1>
                <AllPackages />
              </div>
            </>
          )}
        </>
      )}

      <MainFooter />
    </>
  );
};

export default Fitness;

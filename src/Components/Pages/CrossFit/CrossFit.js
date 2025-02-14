import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/Image/CrossFit/pic1.png";
import img2 from "../../../assets/Image/CrossFit/pic2.png";
import AuthUser from "../../../hooks/AuthUser/AuthUser";
import Loading from "../../../hooks/Loading/Loading";
import Package from "../Package/Package";
import MainFooter from "../Shared/Footer/MainFooter";
import SharedNav from "../Shared/SharedNav";
import "./CrossFit.css";
import CrossFitTable from "./CrossFitTable";

const CrossFit = () => {
  const { token, email } = AuthUser()
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [bgImage, setBgImage] = useState([]);

  // background video and images
  useEffect(() => {
    fetch(`http://crossfitassemble.xyz/api/static_file_web`)
      .then((res) => res.json())
      .then((data) => setBgImage(data.data));
  }, []);

  useEffect(() => {
    setLoading(true)
    fetch(`http://crossfitassemble.xyz/api/users/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data)
        setLoading(false)
        // console.log(data)
      }
      )
  }, [token])


  let currentUser = []
  if (userData.length > 0) {
    currentUser = userData?.filter(item => item?.email === email)
  }
console.log('bg iamge', bgImage.crossfit_image_two)
  return (
    <>
      <SharedNav />
      <div className="mid-container">
        <div className="grid md:grid-cols-2 gap-10 lg:h-[80vh]">
          <div className="flex items-center">
            <div>
              <h1 className="text-3xl text-primary font-extrabold mb-5">
                WHAT IS CrossFit?
              </h1>
              <p className="font-bold lg:w-[90%] text-justify">
                CrossFit is a strength & conditioning program based on general
                physical preparedness (GPP). In the CrossFit method of training,
                real life movements like running, lifting, swimming, cycling,
                carrying loads to distance, climbing, pushing or pulling heavy
                objects etc. are programmed into effective and fun workouts
                designed by CrossFit trainers.{" "}
              </p>
            </div>
          </div>
          <div className="w-full h-full flex items-center">
            <img className="w-full" src={bgImage.crossfit_image_one} alt="" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:h-[100vh]">
          <div className="w-full h-full flex items-center">
            <img className="w-full" src={bgImage.crossfit_image_two} alt="" />
          </div>
          <div className="flex items-center md:order-2 order-1">
            <div>
              <h1 className="text-3xl text-primary font-extrabold mb-5">
                All sessions are coach led by a fully qualified CrossFit coach.
              </h1>
              <p className="font-bold lg:w-[90%] text-justify">
                We believe fitness should be accessible to everyone, everywhere,
                regardless of income or access to a gym. With hundreds of
                professional workouts, healthy recipes and informative articles,
                as well as one of the most positive communities on the web,
                you’ll have everything you need to reach your personal fitness
                goals – for free!
              </p>
            </div>
          </div>
        </div>
        <CrossFitTable />

        <div className="mb-16">
          <h1 className="md:text-4xl text-3xl font-bold text-primary mb-6">
            Our Coaches
          </h1>
          <div className="md:flex gap-10 items-center">
            <div className="lg:w-[35%] md:w-[45%] overflow-hidden rounded-xl">
              <img className="w-full" src={bgImage.crossfit_coach_image_one} alt="" />
            </div>
            <div className="lg:w-[65%] md:w-[55%]">
              <div>
                <h1 className="text-3xl text-primary font-extrabold mb-5 uppercase md:mt-0 mt-5">
                  Daif Salemoon
                </h1>
                <p className="text-justify">
                  Daif is a CrossFit Level-2 trainer. He's coaching CrossFit for
                  the last 5 years. Being a black belt in Karate, he's used to
                  living a disciplined life from an early age. Resultantly, his
                  coaching reflects the values of a balanced lifestyle. As a
                  personal trainer and nutritionist, he is proficient at
                  navigating clients journey through different stages of change.
                  It's not always about the training or nutrition that is
                  challenging, sometimes people struggle with progress due to
                  setbacks in other areas of their lives. Learning from and
                  overcoming his own challenges, Daif is a life coach who's
                  passionate about helping people overcome life hurdles, set
                  goals and follow their passion and purpose.
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex items-center gap-10  mt-14">
            <div className="lg:w-[35%] md:w-[45%] overflow-hidden rounded-xl md:order-2 order-1">
              <img className="w-full h-full" src={bgImage.crossfit_coach_image_two} alt="coach" />
            </div>
            <div className="lg:w-[65%] md:w-[55%] md:order-1 order-2">
              <div>
                <h1 className="text-3xl text-primary font-extrabold mb-5 uppercase md:mt-0 mt-5">
                  Shahidur Rahman
                </h1>
                <p className="text-justify">
                  Shahid is a CrossFit level-1 trainer. He's passionate about
                  helping people be in control of their lives and he wants to do
                  that by making them move better in their day to day lives.
                  He's working as a coach for the last nine years. He's a
                  certified personal trainer who has a knack for corrective and
                  adaptive exercise and many of our clients with injuries and
                  other physical limitations are reaping the benefit of that.{" "}
                  <br />
                  <br />
                  These days, busy life leaves little room for exercise for many
                  of us. A short intensive class can solve that. Shahid here is
                  a HIIT certified coach who delivers short intense and fun
                  classes at CFA regularly. <br />
                  <br />
                  As it's not always about training and factors like nutrition,
                  sleep, stress and support system plays important roles in a
                  person's growth, Shahid is efficient at not just showing the
                  path but also leading the way every step of the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-16 justify-center border-y-2 py-10">
          <a
            rel="noreferrer"
            href="https://journal.crossfit.com"
            target="_blank"
            title="CrossFit Journal: The Performance-Based Lifestyle Resource"
          >
            <img
              src="https://de45qwmlmgefw.cloudfront.net/badges/black-300x150.png"
              width="200px"
              height="130"
              alt="CrossFit Journal: The Performance-Based Lifestyle Resource"
            />
          </a>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default CrossFit;

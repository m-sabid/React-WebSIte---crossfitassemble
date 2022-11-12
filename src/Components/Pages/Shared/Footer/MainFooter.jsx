import logo from "../../../../assets/Image/Logo/logo2.png";
import { GrInstagram, GrLinkedin, GrFacebook } from "react-icons/gr";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <div>
      <div className="bg-primary footer py-10 border-b">
        <div className="mid-container">
          <div className="md:flex gap-5 items-start justify-between">
            <div className="md:w-[15%]">
              <img className="w-1/4 mb-5 md:w-2/3" src={logo} alt="" />
            </div>
            <div className="grid md:w-[85%] text-white grid-cols-2 md:grid-cols-3 gap-10 ">
              <div>
                <p className="text-2xl mb-3 font-semibold c-white">CrossFit Assemble <hr /></p> 

                <p className="mb-5 text-sm c-white">
                  Green Grandeur (8th floor) 58/E, Kemal Ataturk Avenue Banani,
                  Dhaka, Bangladesh
                </p>
                <span className="font-bold text-sm c-white">
                  Saturday to Thursday
                  <br />
                  From 07:00 AM to 10:00 PM
                </span>
              </div>
              <div>
                <p className="text-2xl mb-3 font-semibold c-white">Quick links <hr /></p>
                <ul className="text-sm c-white">
                  <li className="my-2 cursor-pointer c-white"><Link to={'/'}> Home </Link> </li>
                  <li className="my-2 cursor-pointer c-white"><Link to={'/about'}> About us </Link> </li>
                  <li className="my-2 cursor-pointer c-white"><Link to={'/crossfit'}> CrossFit </Link> </li>
                  <li className="my-2 cursor-pointer c-white"><Link to={'/programs'}> Other Programs </Link></li>
                  <li className="my-2 cursor-pointer c-white"><Link to={'/trainers'}> Our Team </Link></li>
                </ul>
              </div>
              <div>
                <p className="text-2xl mb-3 font-semibold c-white">Contact Us <hr /></p>
                <p className="mb-2 text-lg c-white">Call Us</p>
                <p className="text-sm c-white">
                  88018475-46080
                  <br />
                  88018475-46081
                </p>
                <p className="mt-2 mb-1 text-lg c-white">Email Us</p>
                <p className="text-sm c-white">info@crossfitassemble.com</p>
                <p className="mt-2 text-lg c-white">Social Media</p>
                <div className="flex items-center gap-2 mt-2 md:text-sm text-sm c-white">
                  <GrFacebook />
                  <a
                    target="blank"
                    className=" "
                    href="https://www.facebook.com/crossfitassemblebd/"
                  >
                    CrossFitassemblebd
                  </a>
                </div>

                <div className="flex items-center gap-2 mt-2 text-sm">
                  <GrInstagram />
                  <a
                    target="blank"
                    className=""
                    href="https://www.instagram.com/crossfitassemble/"
                  >
                    crossfitassemble
                  </a>
                </div>

                <div className="flex items-center gap-2 mt-2 text-sm">
                  <GrLinkedin />
                  <a
                    target="blank"
                    className=""
                    href="https://www.linkedin.com/company/crossfit-assemble"
                  >
                    crossfitassemble
                  </a>
                </div>
              </div>
              {/* <div>
                <h1 className="text-2xl mb-3 font-semibold">Services</h1>
                <p className="text-sm mb-2">Digital Management</p>
                <p className="text-sm">Media Art Production</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;

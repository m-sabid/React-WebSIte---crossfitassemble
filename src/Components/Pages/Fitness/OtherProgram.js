import Data from "./OtherProgram.json";
import "./OtherProgram.css";

const OtherProgram = () => {
  return (
    <>
      <div className="container overflow-hidden max-w-full mx-auto my-20">
        {Data.map((dt, index) => {

          return (
            <>
              <div className="border-l-[3px] border-warning p-2 max-w-full" data-aos={index % 2 ? "fade-right" : "fade-left"}
              >
                <h1 className="md:text-[20px] text-primary font-bold">{dt.programName}</h1>

                <p className="text-[#071B46] mb-5 text-justify">{dt.programDescription}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default OtherProgram;

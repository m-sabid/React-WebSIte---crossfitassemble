import React, { useEffect, useState } from "react";
import ourTeam from "./OurTeam.json";
import "./OurTeam.css";

const OurTeamCom = () => {
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState();

  console.log(data, "____data");

  return (
    <div className="OurTeamCom">
      <div className="team_carts grid md:grid-cols-3 gap-5">
        {ourTeam.map((item, index) => {
          return (
            <>
              <div className="cart rounded-xl" key={index}>
                <img
                  className="team_image rounded-xl"
                  src={item.memberImage}
                  alt=""
                />
                <div className="name_more">
                  <h1 className="c-white">{item.memberName}</h1>
                  <p className="text-xs c-white">{item.memberDesignation}</p>
                  <hr />
                  <button
                    className="bg-orange-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(true);
                      console.log("after make it true");
                      setData(item);
                    }}
                  >
                    SEE MORE
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <div className="flex gap-5">
                      <div className="w-20 h-full">
                        <img
                          className="rounded-lg"
                          src={data.memberImage}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-xl font-semibold">
                          {data?.memberName}
                        </h3>
                        <p>{data?.memberDesignation}</p>
                      </div>
                    </div>
                    <button
                      className="text-gray-300 btn btn-sm btn-circle absolute right-5"
                      onClick={() => setShowModal(false)}
                    >
                      x
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative dis overflow-y-auto p-6 flex-auto">
                    <p className="my-4 bg-scroll text-slate-500 text-lg leading-relaxed text-justify">
                      {data.memberDescription}
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-error text-white font-bold btn-sm"
                      >
                        Close
                      </label>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default OurTeamCom;

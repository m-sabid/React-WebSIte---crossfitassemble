import { useState } from "react";
import ImageGalleryData from "./AboutGalleryData.json";
import "./ImageGallery.css";
import imgLol from "../../../../assets/COACH/Fannana_Islam_Promi.png";

const ImageGallery = () => {
  const [popup, setPopup] = useState(false);
  const [selected, setSelected] = useState(null);

  console.log(selected);

  return (
    <div className="Gallery">
      <h1 className="w-full text-4xl text-center font-bold mt-10 pl-20">
        Gallery
      </h1>

      <div className="imgContainer my-10 w-full">
        {ImageGalleryData.map((im) => {
          return (
            <>
              <div className="imgCon ">
                <img
                  onClick={() => {
                    setSelected(im);
                    setPopup(true);
                  }}
                  src={im.img}
                  alt=""
                />
              </div>
            </>
          );
        })}
        <div onClick={() => setPopup(false)} className={popup === true ? "popup_img" : "popup_false"}>
          <span onClick={() => setPopup(false)}>&times;</span>
          <img src={selected?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

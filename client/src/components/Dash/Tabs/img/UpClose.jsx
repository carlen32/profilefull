import { useSelector } from "react-redux";
import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UpClose = () => {
  const { id } = useParams();

  const boughtPic = useSelector(state => state.imgVidReducer.userImgs.pics);
  console.log(boughtPic);
  const focusedImg = boughtPic.filter(p => p.id === id);

  return (
    <div className="bg-light container-fluid">
      {focusedImg
        ? focusedImg.map((m, i) => (
            <div key={i} className="row d-flex justify-content-center">
              <div className="col-12">
                <img
                  src={`.${m.imgUrl}`}
                  alt="bought"
                  className="img-fluid custom-img"
                />
              </div>
              <h3 className="display-4 col-6">{m.name}</h3>
            </div>
          ))
        : ""}
    </div>
  );
};

export default UpClose;

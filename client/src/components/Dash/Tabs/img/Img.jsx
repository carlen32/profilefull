import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "../../../Modals/Pagination";
import BuyImg from "./BuyImg";



const Img = () => {
  const allImg = useSelector(state => state.imgVidReducer.imgObj);
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const boughtPic = useSelector(state => state.imgVidReducer.userImgs.pics);

  // const checked = boughtPic.filter(p => p.id === Photo.id)

  const reducedImg = allImg
    ? allImg.slice(indexOfFirstPost, indexOfLastPost)
    : "";


    const myPictures = (e,m) => {
      console.log(e, m)
      history.push(`/MyPictures/${m.id}`)
  }

  return (
    <div className="tab-pane fade row" id="imgPane">
      <Pagination
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        extra="imgSale"
        currentPage={currentPage}
        totalPosts={allImg ? allImg.length : ""}
      />
      <h5 className='text-center text-dark'>{currentPage}</h5>
      {allImg && boughtPic
        ? reducedImg.map((m, i) =>
            boughtPic.filter(p => p.id === m.id).length > 0 ? (
              <div className="col-12 row" key={i}>
                <div className="col-md-6  d-flex justify-content-center align-items-center">
                  <img
                    src={m.imgUrl}
                    alt="Buy Me"
                    className="img-fluid img-thumbnail"
                  />
                </div>
                <div className="col-md-6">
                  <h3 className="display-4">{m.name}</h3>

                  <p className=" m-2">{m.description}</p>
                  <div className=" m-2 d-flex justify-content-end">
                    <button onClick={(e) => myPictures(e,m)} className='btn btn-info '>View Picture</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-12 row" key={i}>
                <div className="col-md-6">
                  <h3 className=" display-4">{m.name}</h3>
                  <h5 className="m-2">{m.price}$</h5>
                  <p className=" m-2">{m.description}</p>
                  <div className=" m-2 d-flex justify-content-end">
                    <BuyImg picture={m} />
                  </div>
                </div>
                <div className="col-md-6  d-flex justify-content-center align-items-center">
                  <img
                    src={m.imgUrl}
                    alt="Buy Me"
                    className="img-fluid img-thumbnail  img-security"
                  />
                </div>
              </div>
            )
          )
        : ""}
    </div>
  );
};

export default Img;

import React, { useRef, Fragment, useState} from "react";
import MainModal from "../../../Modals/MainModal";
import { buyImage } from "../../../../redux/actions/img&Vid/imgVid";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../../../redux/actions/handleErr";

const BuyImg = picture => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const Photo = picture.picture;
  const err = useSelector(state => state.errorReducer.msg);
 
  const errMessage =
    err.length > 0 ? (
      <div className=" col-12 d-flex justify-content-center">
        <h6 className="text-danger">{err}</h6>
      </div>
    ) : null;

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const openModal = e => {
    modalRef.current.openModal();
    dispatch(clearErrors());
  };

  const closeModal = e => {
    modalRef.current.close();
    dispatch(clearErrors());
  };




  const onSubmit = async e => {
    e.preventDefault();
    const body = {
      email,
      password,
      id: Photo.id,
      name: Photo.name,
      imgUrl: Photo.imgUrl,
      price: Photo.price,
      description: Photo.description
    };
    try {
      await dispatch(buyImage(body))
     
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <Fragment>
      <button className="btn btn-primary col-3 text-white" onClick={openModal}>
        work out
      </button>
    

      <MainModal ref={modalRef}>
        <form onSubmit={onSubmit} className=" row container bg-white ">
          <h4 className="display-4 col-12"> {Photo.name}</h4>
          <div className="d-flex col-12 justify-content-end">
            <h4>${Photo.price}</h4>
          </div>
          <h4 className="">{errMessage}</h4>
          <div className="form-group input-group-md col-12 ">
            <label>Enter Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group input-group-md col-12">
            <label>Enter Password </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              required
              onChange={onChange}
            />
          </div>

          <div className="form-group input-group col-12 row ">
            
            <div className='col-12'>
              <input
                className="mr-2"
                type="checkbox"
                name="agree"
                id="agree"
                value="checkedValue"
                required
              />
              <label className="form-check-label">
                <a href="#!">I Agree to Terms And Conditions</a>
              </label></div>
              <div className='col-12 d-flex justify-content-end'> 
              <button type= 'submit' className="btn mr-2 btn-primary">Buy Now</button>
              <button onClick={closeModal} type="close" className="btn btn-danger">Close</button>
             
            </div>
          </div>
        </form>
      </MainModal>
    </Fragment>
  );
};
export default BuyImg;

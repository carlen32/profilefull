import React, { useRef, Fragment, useState } from "react";
import MainModal from "../Modals/MainModal";
import { useDispatch} from "react-redux";
import { register } from "../../redux/actions/auth/authActions";
import { clearErrors } from "../../redux/actions/handleErr";

const Register = props => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const errMessage =
    props.errMsg.length > 0 ? (
      <div className=" col-12 d-flex justify-content-center">
        <h6 className="text-danger">{props.errMsg}</h6>
      </div>
    ) : null;

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    cardType: "",
    phoneNumber: "",
    name: "",
    lastName: "",
    expiration: "",
    cardNumber: ""
  });

  const {
    email,
    password,
    name,
    confirmPassword,
    cardType,
    phoneNumber,
    lastName,
    expiration,
    cardNumber
  } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const openModal = e => {
    modalRef.current.openModal();
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
      name,
      confirmPassword,
      cardType,
      phoneNumber,
      lastName,
      expiration,
      cardNumber
    };
    try {
      await dispatch(register(body));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <button className="btn btn-primary btn-md text-light" href="" onClick={openModal}>
        Become A Trainer
      </button>

      <MainModal ref={modalRef}>
        <form onSubmit={onSubmit} className=" row container bg-white ">
          <h4 className="col-12 text-center display-4 text-primary">Become A Fan</h4>
          <div className="form-group input-group-sm col-md-6 ">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group input-group-sm col-md-6 ">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="last-name"
              required
              onChange={onChange}
            />
          </div>
          <div className="form-group input-group-sm col-md-6 ">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              onChange={onChange}
              required
              placeholder="davidranger84@gmail.com"
            />
          </div>
          <div className="form-group input-group-sm col-md-6 ">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              required
              onChange={onChange}
            />
          </div>
          <div className="form-group input-group-sm col-md-6 ">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              id="confirm-password"
              required
              onChange={onChange}
            />
          </div>
          <div className=" form-group input-group-sm col-md-6">
            <label>Phone Number</label>
            <input
              type="phone-number"
              className="form-control"
              name="phoneNumber"
              id="phone-number"
              required
              onChange={onChange}
              placeholder="480-666-7676"
            />
          </div>

          <div className=" form-group input-group-sm col-md-6">
            <label>Card Number</label>
            <input
              type="text"
              className="form-control"
              name="cardNumber"
              id="card-number"
              required
              onChange={onChange}
              placeholder="444-6756-67676"
            />
          </div>
          <div className=" form-group input-group-sm col-md-6 col-sm-12 row ">
            <div className="col-6 input-group-sm">
              <label>Expiration</label>
              <input
                type="text"
                className="form-control"
                name="expiration"
                id="expiration"
                required
                onChange={onChange}
                placeholder="09/22"
              />
            </div>
            <div className="col-6 input-group-sm">
              <label>Type</label>
              <select
                className="form-control"
                name="cardType"
                onChange={onChange}
                id="card-type"
                required
              >
                <option>Visa</option>
                <option>Master</option>
                <option>Captial One </option>
              </select>
            </div>
          </div>
          {errMessage}
          <div className="col-12 d-flex align-items-center justify-content-md-end justify-content-start"> <button type="submit" className="btn btn-primary m-1 btn-md">
              Become A Fan
            </button>
            <button
              onClick={closeModal}
              type="none"
              className="btn btn-danger m-1 btn-md"
            >
              Close
            </button>
           
          </div>
        </form>
      </MainModal>
    </Fragment>
  );
};
export default Register;

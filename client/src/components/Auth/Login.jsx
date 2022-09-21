import React, { useRef, Fragment, useState } from "react";
import MainModal from "../Modals/MainModal";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth/authActions";
import { clearErrors } from "../../redux/actions/handleErr";

const Login = props => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  //   console.log(props.errMsg);

  const errMessage =
    props.errMsg.length > 0 ? (
      <div className=" col-12 d-flex justify-content-center">
        <h6 className="text-danger">{props.errMsg}</h6>
      </div>
    ) : null;

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    lastName: ""
  });

  const { email, password, name, lastName } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const openModal = e => {
    modalRef.current.openModal();
    dispatch(clearErrors());
  };

  const closeModal = e => {
    modalRef.current.close();
  };

  const onSubmit = async e => {
    e.preventDefault();
    const body = {
      email,
      password,
      name,
      lastName
    };
    try {
      await dispatch(login(body));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <button
        className="btn btn-primary btn-sm col-3 text-white"
        href=""
        onClick={openModal}
      >
        Login
      </button>

      <MainModal ref={modalRef}>
        <form onSubmit={onSubmit} className=" row container bg-white ">
          <h4 className="col-12 text-center display-4 text-primary">Login</h4>
          <div className="form-group input-group-md col-12 ">
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
          <div className="form-group input-group-md col-12">
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
          <div className="form-group input-group-md col-12 ">
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
          <div className="form-group input-group-md col-12 ">
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
          {errMessage}
          <div className="col-12 d-flex align-items-center justify-content-md-end justify-content-start">
            <button type="submit" className="btn btn-primary m-1 btn-md">
              Login
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
export default Login;

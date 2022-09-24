import { logout } from "../../redux/actions/auth/authActions";
import { useDispatch } from "react-redux";
import Login from "../Auth/Login";

const FrontNav = (props) => {
  const dispatch = useDispatch();
  const isAuth = props.isAuth;
  // console.log(isAuth);

  const logoutBtn = () => {
    dispatch(logout());
  };

  const logOut = (
    <button
      onClick={logoutBtn}
      className="btn btn-primary btn-sm col-3 text-white"
      href="#!"
    >
      Sign Out
    </button>
  );

  return (
    <div className="container-fluid navbar-expand-lg">
      <div className="row bg-black text-white ">
        <div className="col-12 col-sm-6 d-flex text-center justify-content-center ">
          
            <h3 className="m-1">FIT</h3>
            <a href="https://www.fitsocietyaz.com/" className="m-1">
              <svg
                className="star-logo"
                viewBox="0 0 294 255"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M293.223 91.5452C292.299 89.1851 290.598 87.1112 288.331 85.5797C286.063 84.0483 283.328 83.1262 280.463 82.9273L196.658 77.1524L160.393 7.53384C159.238 5.29157 157.36 3.38709 154.984 2.05025C152.609 0.713411 149.838 0.00134978 147.006 1.91707e-06C144.174 -0.00134594 141.402 0.708077 139.025 2.04265C136.648 3.37723 134.767 5.27992 133.609 7.52109L97.3443 77.1524L13.5392 82.9273C10.7234 83.1208 8.0316 84.0136 5.78568 85.4991C3.53975 86.9845 1.83485 88.9996 0.874941 91.3034C-0.0849721 93.6071 -0.25925 96.1019 0.372959 98.4892C1.00517 100.877 2.41709 103.055 4.43981 104.765L66.3713 157.123L44.4681 239.375C43.8031 241.864 44.0162 244.47 45.08 246.853C46.1437 249.237 48.0089 251.288 50.4335 252.74C52.8581 254.193 55.7302 254.98 58.677 255C61.6239 255.019 64.5094 254.27 66.9593 252.85L147.001 206.573L227.043 252.85C229.547 254.291 232.5 255.034 235.505 254.976C238.51 254.919 241.423 254.065 243.851 252.53C246.28 250.994 248.108 248.851 249.09 246.387C250.072 243.924 250.16 241.258 249.343 238.75L222.457 157.161L289.136 105.122C293.502 101.706 295.105 96.3768 293.223 91.5452V91.5452Z"
                />
              </svg>
            </a>
            <h3 className="m-1">SOCIETY</h3>
        </div>
        <div className="col-12 col-sm-6 row d-flex align-items-center ">
          {isAuth === true ? logOut : <Login {...props} />}
          <a className=" col-3 d-flex justify-content-end " href="#!">
            <i className="fab fa-twitter fa-2x social-icons"></i>
          </a>

          <a className="col-3 d-flex justify-content-end" href="#!">
            <i className="fab fa-facebook fa-2x social-icons"></i>
          </a>

          <a className="col-3 d-flex justify-content-end" href="#!">
            <i className="fab fa-instagram fa-2x social-icons"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default FrontNav;

/* <table className="table table-striped table-bordered table-sm">
<thead className="bg-info text-white">
  <tr>
    <th>Value</th>
    <th>Even?</th>
    <th>Even?</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>77</td>
    <td>45</td>
    <td>45</td>
  </tr>
</tbody>
<tfoot className="text-right">
  <tr>
    <td colSpan="3">
      <button className="btn btn-info m-1">Click Me</button>
    </td>
  </tr>
</tfoot>
</table>
<div className="m-2">
<div className="form-group">
  <label>Name:</label>
  <input className="form-control" />
</div>
<div className="form-group">
  <label>City:</label>
  <input className="form-control" />
</div>
</div> */

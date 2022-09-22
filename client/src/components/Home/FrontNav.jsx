import { logout } from "../../redux/actions/auth/authActions";
import { useDispatch} from "react-redux";
import Login from "../Auth/Login";


const FrontNav = (props) => {
  const dispatch = useDispatch();
  const isAuth = props.isAuth
  // console.log(isAuth);

  const logoutBtn = () => {
    dispatch(logout());
  };

  
  const logOut = (

     <button onClick={logoutBtn}className="btn btn-primary btn-sm col-3 text-white" href="#!">
     Sign Out
   </button>
  );

  return (
    <div className="container-fluid navbar-expand-lg">
      <div className="row bg-dark text-white ">
        <div className="col-6 font-weight-bold nav-item d-flex row align-items-center">
          <h3 className="col-12">
            <span className="logo-o">
              O
              <a href="!#">
                <i className="fa fa-lock text-white" aria-hidden="true"></i>
              </a>
            </span>
            nly<span className="text-info font-family  font logo">Legs</span>
          </h3>
        </div>
        <div className="col-12 col-sm-6 row d-flex align-items-center "> 
          {isAuth === true ? logOut : <Login {...props}/>}
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

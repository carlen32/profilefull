import { Fragment } from "react/cjs/react.development";
import Info from "./Tabs/Info";
import Img from "./Tabs/img/Img"
import ImgGallery from "./Tabs/img/ImgGallery";
import { useSelector } from "react-redux";

const Hero = () => {
    const name = useSelector(state => state.authReducer.name);
    const lastName = useSelector(state => state.authReducer.lastName);

  const openType = e => {
    let i;
    let tabPane = document.getElementsByClassName("tab-pane");
    let navLink = document.getElementsByClassName("nav-link");
    let targetID = document.getElementById(e.target.name);
    let target = document.getElementById(e.target.id);
    // // Get all elements with classes and hiding them
    for (i = 0; i < tabPane.length; i++) {
      tabPane[i].classList.remove("show");
      tabPane[i].classList.remove("active");
      tabPane[i].classList.add("fade");
    }
    for (i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove("active");
    }
// ***** added the classes to the tab you click on
    targetID.classList.add("show", "active");
    target.classList.add("active");
   
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="hero d-flex justify-content-center align-items-center">
            <h2 className='display-4 text-dark text-shadow'>Hi {name} {lastName}</h2>
        </div>
        {/* <!-- Nav tabs --> */}
        <ul className="nav nav-tabs d-flex justify-content-around" id="navId">
          <li className="nav-item">
            <a
              onClick={openType}
              href="#!"
              name="infoPane"
              id="infoTab"
              className="nav-link"
            >
              Info
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#!"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu">
              <a
                name="randomPane"
                id="randomTab"
                className="nav-link"
                onClick={openType}
                href="#!"
              >
                Action
              </a>
              <a
                name="myPicturesPane"
                id="myPicturesTab"
                className="nav-link dropdown-item"
                onClick={openType}
                href="#!"
              >
                My Pictures
              </a>
              <div className="dropdown-divider"></div>
              <a
                name="dmPane"
                id="dmTab"
                className="nav-link"
                onClick={openType}
                href="#!"
              >
                Direct Message
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              href="#!"
              name="imgPane"
              id="imgTab"
              className="nav-link"
              onClick={openType}
            >
              Images
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#!"
              name="vidPane"
              id="vidTab"
              className='nav-link'
              onClick={openType}
            >
          Videos 
            </a>
          </li>
        </ul>

        {/* <!-- Tab panes --> */}
        <div className="tab-content">
          <Info />
          <Img />
         <ImgGallery />
          <div className="tab-pane fade" id="dmPane">
            third
          </div>
          <div className="tab-pane fade" id="vidPane">
            fourth
          </div>
        
          <div className="tab-pane  fade" id="randomPane">
            random
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;

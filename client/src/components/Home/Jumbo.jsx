import Register from "../Auth/register";

const Jumbo = (props) => {
  return (
    <div className="container-fluid">
      <div className=" row d-flex justify-content-center">
        <div className="jumbotron jumbotron-fluid col-md-6 bg-white m-0 ">
          <div className=" text-center">
            <h1 className="display-7 text-primary"> @Diva Stacy </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ad
              eligendi distinctio pariatur rem sed, molestias doloremque amet
              quaerat accusamus veritatis eos autem cupiditate possimus illo.
              Modi tempore amet consequuntur!
            </p>
            <hr className="my-1" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
              quaerat saepe iure, inventore reiciendis itaque.
            </p>
            <p className="lead">
             <Register {...props}/>
            </p>
          </div>
        </div>
        <div
          id="carouselId"
          className="carousel d-flex justify-content-center align-items-center slide col-md-6 col-sm-8  "
          data-ride="carousel"
        >
          <ol className="carousel-indicators ">
            <li
              data-target="#carouselId"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
            <li data-target="#carouselId" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src="./img/pic1.jpg"
                className="img-fluid"
                alt="First slide"
              />
              <div className="carousel-caption d-md-block">
                <h3>Title</h3>
                <p>Description</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./img/pic2.jpg"
                className="img-fluid"
                alt="Second slide"
              />
              <div className="carousel-caption  d-md-block">
                <h3>Title</h3>
                <p>Description</p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                src="./img/pic4.jpg"
                className="img-fluid"
                alt="Third slide"
              />
              <div className="carousel-caption d-md-block">
                <h3>Title</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselId"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselId"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className=" col-md-12 col-sm-12  row ">
          <h2 className=" d-flex justify-content-center align-items-center display-5 col-12 text-info">About Me</h2>
          <div className="border-radius col-md-6 ">
            <h4 className="text-md-center">Get To Know Me</h4>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            </p>
            <p >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              placeat veniam consectetur quas ea, pariatur aliquam magni est
              molestias omnis quis animi! Recusandae iusto quos mollitia ipsa
              esse odio vel.
            </p>
            <p className="text-info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              placeat veniam consectetur quas ea, pariatur aliquam magni est
              molestias omnis quis animi! Recusandae iusto quos mollitia ipsa
              esse odio vel.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam debitis rerum assumenda consequuntur magni accusantium optio quae officia modi, ipsum, voluptatem dolore exercitationem vitae. Aut cum at possimus magni.
            </p>
          </div>

          <div className=" border-radius col-md-6 overflow-scroll-sm-none">
            <h4 className="text-md-center">Things To Know</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            </p>
            <ul className=' row d-flex justify-content-end align-items-center'>
              <li className ='col-md-6'>work out</li>
              <li className ='col-md-6'>pole dancing</li>
              <li className ='col-md-6'>walks on the beach</li>
              <li className ='col-md-6'>storm archive series</li>
            </ul>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              placeat veniam consectetur quas ea, pariatur aliquam magni est
              molestias omnis quis animi! Recusandae iusto quos mollitia ipsa
              esse odio vel.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              placeat veniam consectetur quas ea, pariatur aliquam magni est
              molestias omnis quis animi! Recusandae iusto quos mollitia ipsa
              esse odio vel.
            </p>
          </div>
          <div className='col-12 d-flex justify-content-center align-items-center'>
            <i className="fas fa-copyright fa-2x "></i>
            <h6> 2022 Second Chance</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jumbo;

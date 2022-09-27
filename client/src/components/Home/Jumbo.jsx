import Register from "../Auth/register";
import Swipe from "./Swiper/Swipe";
import { posters } from "./Swiper/Data";

const Jumbo = (props) => {
  return (
    <div className="container-fluid">
      <div className=" row d-flex justify-content-center">
        <div className="jumbotron jumbotron-fluid col-md-6 bg-white m-0 ">
          <div className=" text-center">
            <h1 className="display-7 text-primary">
              On Boarding @Fit Society{" "}
            </h1>
            <p className="lead">
              Fit Society exists to connect, challenge and inspire to be better
              together.
            </p>
            <hr className="m-1" />
            <p>
              The on boarding process is a four week process where you learn
              exactly what fit society is all about. You will learn the system,
              class protocols, and scenarios you need to expect. You will
              connect, challenge and inspire members
            </p>
            <p>
              They say, “If you want to go fast, go alone. If you want to go
              far, go together.” The strength of our community is not found in
              how much we can lift, but rather the relationships we build around
              our common purpose.
            </p>
            <div className="d-flex row">
              {posters
                ? posters.map((p, i) => {
                    return (
                      <>
                        <img
                          className="col-6 img-fluid "
                          src={p.image}
                          alt={p.alt}
                        />
                      </>
                    );
                  })
                : ""}
            </div>
            <p className="lead mt-4">
              <Register {...props} />
            </p>
          </div>
        </div>
        <Swipe />

        <div className=" col-md-12 col-sm-12  row ">
          <h2 className=" d-flex justify-content-center align-items-center display-5 col-12 text-info">
            About Fit Society
          </h2>
          <h3 className="text-center">WE ARE ON A MISSION</h3>
          <hr className="m-1 " />
          <p className="text-center">
            Fit Society exists to connect, challenge, and inspire people to be
            better together.
          </p>
          <div className="border-radius col-md-6 ">
            <h4 className="text-center">WE LIVE BY A CODE</h4>
            <h5 className="text-center text-info">
              On the road to accomplishing our mission, we have a code.
            </h5>
            <p>
              We work because we know that anything worth having is worth
              sweating for, and there are no free rides. You pay your way.
            </p>
            <p className="">
              We play because we don’t have to do this, we get to do this. We
              take fitness seriously but ourselves not too seriously. We make a
              ruckus.
            </p>
            <p className="">
              We achieve because our effort is aimed at a target. We set goals
              and we won’t stop until we reach them.
            </p>
            <h4 className="text-center">
              GROUP TRAINING IS OUR BREAD AND BUTTER.
            </h4>

            <p>
              Day in and day out, the core of what we do is this: get a group of
              people in a room, work hard, have a blast, and leave sweating and
              smiling. It’s our homebase and our heartbeat, it’s what we love,
              and it’s the primary vehicle to drive our mission forward.
            </p>
          </div>

          <div className=" border-radius col-md-6 overflow-scroll-sm-none">
            <h4 className="text-center">WE PURSUE OUR VALUES</h4>
            <h5 className="text-center text-info">
              The way we chase our mission is shaped by our values.
            </h5>
            {/* <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            </p> */}
            {/* <ul className=" row d-flex justify-content-end align-items-center">
              <li className="col-md-6">work out</li>
              <li className="col-md-6">pole dancing</li>
              <li className="col-md-6">walks on the beach</li>
              <li className="col-md-6">storm archive series</li>
            </ul> */}
            <p>
              We value community because we know we are stronger united than we
              are divided. We believe in “we” before “me”. When our needs come
              before my needs, everyone wins.
            </p>
            <p>
              We value fitness. We are elite athletes and active moms, we are
              rocket scientists, bricklayers, and everything in between. In
              those roles, we want to perform, so we get fit.
            </p>
            <p>
              We value excellence. We are constantly improving and we will not
              be satisfied with mediocre or average… the mission is far too
              important.{" "}
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <i className="fas fa-copyright fa-2x"></i>
            <h6 className="m-2"> 2022 David Carlen</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jumbo;

// eslint-disable-next-line no-lone-blocks
{
  /* <div
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
                src="./img/gym1.jpg"
                className="img-fluid"
                alt="First slide"
              />
              <div className="carousel-caption d-md-block">
                <h3>Connect</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./img/gym2.jpg"
                className="img-fluid"
                alt="14926108 © Yanlev | Dreamstime.com"
              />
              <div className="carousel-caption  d-md-block">
                <h3>Challenge</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./img/gym3.jpg"
                className="img-fluid"
                alt="Third slide 19716357 © Lanak | Dreamstime.com"
              />
              <div className="carousel-caption d-md-block">
                <h3>Inspire</h3>
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
        </div> */
}

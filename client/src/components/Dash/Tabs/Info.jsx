import React from "react";

const Info = ()=> {
  return (
    <div className="tab-pane active show fade " id="infoPane">
      <div className="row">
        <div className="col-md-6">
          <img src="./img/info.jpg" className="img-fluid" alt="info on user img" />
        </div>
        <div className="col-md-6 row">
          <div className="col-12">
            <h4 className=" text-info text-center">Attributes</h4>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              molestias dignissimos aut, obcaecati vero animi, quasi porro est
              inventore odio, eos dicta reprehenderit suscipit sequi aperiam.
              Laboriosam ea alias sint. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Pariatur molestias dignissimos aut.
            </p>
            <h5 className="text-info">Things To Know</h5>
            <ul className="row list-styled">
              <li className="col-6">Height 5'7</li>
              <li className="col-6">Weight 120</li>
              <li className="col-6">Eye-Color green</li>
              <li className="col-6">Hip 30</li>
              <li className="col-6">Naval 20</li>
              <li className="col-6">Shoe 6</li>
              <li className="col-6">Hair-Color whatever im feeling </li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <h4 className=" text-info text-center">Get To Know Me</h4>
          <div className="card-columns row">
            <div className="card col-md-4">
              <img className="card-img-top" src="./img/img19.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">Love Me Some Fitness</h4>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis tempore itaque quos amet corporis voluptatum enim
                  dignissimos minus illo libero. Non qui blanditiis dolores
                  possimus est, ea assumenda sint fugit! Non qui blanditiis
                  dolores possimus est, ea assumenda sint fugit!
                </p>
              </div>
            </div>
            <div className="card col-md-4">
              <img className="card-img-top" src="./img/img20.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">The Outdoors </h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  nam doloribus velit pariatur sunt excepturi voluptas vero
                  minus, voluptates, aspernatur laboriosam architecto maxime
                  ratione aliquid? Perferendis unde odit architecto aspernatur.
                </p>
              </div>
            </div>
            <div className="card col-md-4">
              <img className="card-img-top" src="./img/img29.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">Born And Raised</h4>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis tempore itaque quos amet corporis voluptatum enim
                  dignissimos minus illo libero. Non qui blanditiis dolores
                  possimus est, ea assumenda sint fugit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
//    /* <dl class="row">
//                <dt class="col-sm-8">Height</dt>
//                <dd class="col-sm-4">5'7</dd>
//                <dt class="col-sm-8">Weight</dt>
//                <dd class="col-sm-4">125</dd>
//                <dt class="col-sm-8">Naval</dt>
//                <dd class="col-sm-4">22</dd>
//                <dt class="col-sm-8">Hip</dt>
//                <dd class="col-sm-4">30</dd>
//                <dt class="col-sm-8">Shoe</dt>
//                <dd class="col-sm-4">6</dd>       </dl>

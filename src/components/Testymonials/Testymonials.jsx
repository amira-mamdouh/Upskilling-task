import { FaStar } from "react-icons/fa";
import Img from "../../assets/avatar.jpg";

export default function Testymonials() {
  return (
    <>
      <section className="testymonials py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="heading-container">
              <div className="corner1"></div>
              <div className="corner2"></div>
              <h3>Testymonials</h3>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="inner d-flex">
                <div className="avatar me-3">
                  <img
                    className="w-100 rounded-circle "
                    src={Img}
                    alt="person"
                  />
                </div>
                <div className="testymonials-content">
                  <h5>Courtney Henry</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <div className="icons">
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="inner d-flex">
                <div className="avatar me-3">
                  <img
                    className="w-100 rounded-circle"
                    src={Img}
                    alt="person"
                  />
                </div>
                <div className="testymonials-content">
                  <h5>Courtney Henry</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <div className="icons">
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="inner d-flex">
                <div className="avatar me-3">
                  <img
                    className="w-100 rounded-circle"
                    src={Img}
                    alt="person"
                  />
                </div>
                <div className="testymonials-content">
                  <h5>Courtney Henry</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <div className="icons">
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="inner d-flex">
                <div className="avatar me-3">
                  <img
                    className="w-100 rounded-circle"
                    src={Img}
                    alt="person"
                  />
                </div>
                <div className="testymonials-content">
                  <h5>Courtney Henry</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <div className="icons">
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

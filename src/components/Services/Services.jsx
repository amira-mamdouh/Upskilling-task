import Img1 from "../../assets/Rectangle 250.png";
import Img2 from "../../assets/Rectangle 250-2.png";
import Img3 from "../../assets/Rectangle 250-1.png";

export default function Services() {
  return (
    <>
      <section className="services">
        <div className="container py-5">
          <div className="text-center">
            <div className="heading-container">
              <div className="corner1"></div>
              <div className="corner2"></div>
              <h2>Services</h2>
            </div>
          </div>
          <div className="row g-3 my-5">
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card">
                <img src={Img1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card">
                <img src={Img2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card">
                <img src={Img3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button d-flex justify-content-center mt-3">
            <button className="btn btn-helpme">Help Me</button>
          </div>
        </div>
      </section>
    </>
  );
}

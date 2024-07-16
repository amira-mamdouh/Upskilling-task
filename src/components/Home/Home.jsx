import Img from "../../assets/Group 560.svg";
export default function Home() {
  return (
    <>
      <header>
        <div className="container py-5">
          <div className=" d-flex justify-content-center text-center">
            <div className="header-content">
              <figure className="header-logo  m-auto">
                <img className="w-100" src={Img} alt="logo" />
              </figure>
              <h1 className="my-4">
                <span>Lorem</span>
                <br />
                Lorem lorem
              </h1>
              <p className="header-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the
              </p>
              <button className="btn btn-helpme btn-home">Help Me</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

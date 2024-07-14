import Img from "../../assets/Rectangle 263.png";

export default function About() {
  return (
    <>
      <div className="all-about-content position-relative">
        <section className="about py-3">
          <div className="container">
            <div className="about-container">
              <h2>About Us</h2>
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an
              </p>
              <img src={Img} alt="Rectangle" />
            </div>
          </div>
        </section>
        <section className="where position-absolute top-0 end-0 w-75">
          <div className="where-container p-5">
            <h2>Where</h2>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

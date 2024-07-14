import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { ColorRing } from "react-loader-spinner";

const mySchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Too Short, at least 3 characters")
    .max(20, "Too Long!"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be numeric"),
});

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isUnSuccess, setUnIsSuccess] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const userData = {
    name: "",
    email: "",
    phone: "",
  };

  const myFormik = useFormik({
    initialValues: userData,
    validationSchema: mySchema,
    onSubmit: (values) => {
      setIsLoading(true);
      axios
        .post(`http://upskilling-egypt.com:3001/contact`, values)
        .then(() => {
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
          setIsLoading(false);
        })
        .catch((errors) => {
          if (errors.response) {
            setUnIsSuccess(errors.response.data.message);
          } else if (errors.request) {
            setUnIsSuccess("Network error, please try again later.");
          } else {
            setUnIsSuccess("An error occurred. Please try again.");
          }
          setTimeout(() => {
            setUnIsSuccess(undefined);
          }, 3000);
          setIsLoading(false);
        });
    },
  });

  return (
    <section className="contact">
      <div className="container py-5">
        <div className="text-center">
          <div className="heading-container">
            <div className="corner1"></div>
            <div className="corner2"></div>
            <h3>Contact Us</h3>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-md-6 col-12">
            <form onSubmit={myFormik.handleSubmit}>
              <input
                value={myFormik.values.name}
                onChange={myFormik.handleChange}
                onBlur={myFormik.handleBlur}
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                className="form-control mb-2"
              />
              {myFormik.errors.name && myFormik.touched.name && (
                <div key="name-error" className="error text-danger mb-3">
                  {myFormik.errors.name}
                </div>
              )}

              <input
                value={myFormik.values.email}
                onChange={myFormik.handleChange}
                onBlur={myFormik.handleBlur}
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                className="form-control mb-2"
              />
              {myFormik.errors.email && myFormik.touched.email && (
                <div key="email-error" className="error text-danger mb-3">
                  {myFormik.errors.email}
                </div>
              )}

              <input
                value={myFormik.values.phone}
                onChange={myFormik.handleChange}
                onBlur={myFormik.handleBlur}
                type="tel"
                placeholder="Phone"
                id="phone"
                name="phone"
                className="form-control mb-2"
              />
              {myFormik.errors.phone && myFormik.touched.phone && (
                <div key="phone-error" className="error text-danger mb-3">
                  {myFormik.errors.phone}
                </div>
              )}

              <div className="button text-end">
                <button className="btn" type="submit">
                  {isLoading ? (
                    <ColorRing
                      visible={true}
                      height="35"
                      width="35"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                    />
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 col-12">
            <div className="content">
              <div className="email">
                <p>Email: upskilling@gmail.com</p>
              </div>
              <div className="phone">
                <p>Phone: +20 115 493 2137</p>
              </div>
            </div>
          </div>
        </div>
        {isSuccess && (
          <div className="success-message mt-3">
            <p className="text-success">Message sent successfully!</p>
          </div>
        )}
        {isUnSuccess && (
          <div className="error-message mt-3">
            <p className="text-danger">{isUnSuccess}</p>
          </div>
        )}
      </div>
    </section>
  );
}

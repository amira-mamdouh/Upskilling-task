import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { ColorRing } from "react-loader-spinner";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

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
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .min(10, "Too Short!"),
});

export default function Contact() {
  const [formStatus, setFormStatus] = useState({
    isSuccess: false,
    isUnSuccess: undefined,
    isLoading: false,
  });

  const userData = {
    name: "",
    email: "",
    phone: "",
  };

  const myFormik = useFormik({
    initialValues: userData,
    validationSchema: mySchema,
    onSubmit: (values) => {
      setFormStatus({
        isLoading: true,
        isSuccess: false,
        isUnSuccess: undefined,
      });
      axios
        .post(`http://upskilling-egypt.com:3001/contact`, values)
        .then(() => {
          setFormStatus({ isSuccess: true, isLoading: false });
          setTimeout(() => {
            setFormStatus({ isSuccess: false, isLoading: false });
          }, 3000);
        })
        .catch((errors) => {
          let errorMsg = "An error occurred. Please try again.";
          if (errors.response) {
            errorMsg = errors.response.data.errors[0].msg;
          } else if (errors.request) {
            errorMsg = "Network error, please try again later.";
          }
          setFormStatus({ isUnSuccess: errorMsg, isLoading: false });
          setTimeout(() => {
            setFormStatus({ isUnSuccess: undefined, isLoading: false });
          }, 3000);
        });
    },
  });

  return (
    <section className="contact py-5">
      <div className="container">
        <div className="text-center mb-5">
          <div className="heading-container">
            <div className="corner1"></div>
            <div className="corner2"></div>
            <h3>Contact Us</h3>
          </div>
        </div>
        <div className="row g-3 pt-3">
          <div className="col-md-6 col-12 px-5">
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

              <div className="button text-center mt-3">
                <button
                  className="btn"
                  type="submit"
                  disabled={formStatus.isLoading}
                >
                  {formStatus.isLoading ? (
                    <ColorRing
                      visible={true}
                      height="30"
                      width="30"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={[
                        "#cedcff",
                        "#cedcff",
                        "#cedcff",
                        "#cedcff",
                        "#cedcff",
                      ]}
                    />
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
              {formStatus.isSuccess && (
                <div className="success-message mt-3">
                  <p className="text-success">Message sent successfully!</p>
                </div>
              )}
              {formStatus.isUnSuccess && (
                <div className="error-message mt-3">
                  <p className="text-danger">{formStatus.isUnSuccess}</p>
                </div>
              )}
            </form>
          </div>
          <div className="col-md-6 col-12">
            <div className="content d-flex justify-content-center flex-column h-100 px-5 ">
              <div className="email d-flex align-items-center mb-4">
                <MdEmail className="email-icon" />
                <p className="mb-0">Email: upskilling@gmail.com</p>
              </div>
              <div className="phone d-flex align-items-center">
                <FaPhoneAlt className="phone-icon" />
                <p className="mb-0">Phone: +20 115 493 2137</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

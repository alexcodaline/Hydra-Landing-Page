import React from "react";
import "./UserForm.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fName: Yup.string()
    .min(2, "First Name should be at least 4 characters")
    .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
    .required("Your name is required"),
  lName: Yup.string()
    .min(2, "Last Name should be at least 4 characters")
    .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
    .required("Your last name is required"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?[0-9]+$/, "Phone must contain only numbers")
    .min(10, "Your phone number should be at least 10 digits")
    .max(13, "Your phone number should not exceed 12 digits")
    .required("Phone Number is required"),
  subject: Yup.string().required("Your subject is required"),
  about: Yup.string().required("This field is required"),
});

export default function UserForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className="form">
      <div className="container-wrapper">
        <div className="form__items">
          <div className="form__title">
            <span>JOIN HYDRA</span>
            <p>Let’s Build Your VR Experience</p>
          </div>
          <div className="form__info">
            <Formik
              initialValues={{
                fName: "",
                lName: "",
                email: "",
                phone: "",
                subject: "",
                about: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="form__data">
                  <div className="user__data">
                    <div className="user__info">
                      <Field
                        name="fName"
                        type="text"
                        className="input-field"
                        placeholder="First Name"
                      />
                      <ErrorMessage
                        name="fName"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="user__info">
                      <Field
                        name="lName"
                        type="text"
                        className="input-field"
                        placeholder="Last Name"
                      />
                      <ErrorMessage
                        name="lName"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="user__data">
                    <div className="user__info">
                      <Field
                        name="email"
                        type="text"
                        className="input-field"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="user__info">
                      <Field
                        name="phone"
                        type="number"
                        className="input-field"
                        placeholder="Phone"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="user__subject">
                    <Field
                      name="subject"
                      type="text"
                      className="input-field"
                      placeholder="Subject"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="user__about">
                    <Field
                      name="about"
                      as="textarea"
                      className="input-field"
                      placeholder="Tell Us Something..."
                    />
                    <ErrorMessage
                      name="about"
                      component="div"
                      className="error_about"
                    />
                  </div>
                  <div className="btnSubmit">
                    <button type="submit">SEND TO HYDRA</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

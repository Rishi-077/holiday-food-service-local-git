import React, { useRef } from "react";
import styles from "./contact.module.css";
import InputField from "../../../../components/form/input-field";
import { Controller, useForm } from "react-hook-form";
import { customLightStyles, keyPress } from "../../../../utils";
import TextAreaField from "../../../../components/form/textarea-field";
import Select from "react-select";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const service = [
  {
    label: "Corporate Food Service",
    value: "Corporate Food Service",
  },
  {
    label: "Boxed Meals",
    value: "Boxed Meals",
  },
  {
    label: "Catered Event & Celebration",
    value: "Catered Event & Celebration",
  },
  {
    label: "Family Style Catering",
    value: "Family Style Catering",
  },
  {
    label: "Employee Snack Boxes",
    value: "Employee Snack Boxes",
  },
  {
    label: "Executive Dining",
    value: "Executive Dining",
  },
];

const employee = [
  {
    label: "1 to 10",
    value: "1-10",
  },
  {
    label: "10 to 50",
    value: "10-50",
  },
  {
    label: "50 to 200",
    value: "50-200",
  },
  {
    label: "200 to 500",
    value: "200-500",
  },
  {
    label: "500+",
    value: "500+",
  },
];
function ContactForm() {
  const url = window.location.origin;
  const form = useRef();
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company_name: "",
      no_of_employees: null,
      service_interest: "",
      message: "",
    },
  });

  const onsubmit = (data) => {
    let payload = {
      ...data,
      website: url,
    };
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        () => {
          reset();
          Swal.fire(
            "Thank you for the enquiry.",
            "Message sent successfully to the respective team.",
            "success",
            "Close"
          );
        },
        (error) => {
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong message could not be sent :) ",
            icon: "error",
            button: "ok!",
          });
        }
      );
  };
  return (
    <section className={`${styles.service_section} container-fluid py-5`}>
      <div className="row">
        {/* topbar */}
        <div className={`col-12`}>
          <div className="container py-2">
            <div className="row">
              <div className="col-12">
                {/* <h5 className="poppins primary-text text-start">Contact Us</h5> */}
                <h2 className="poppins black-text text-start">
                  Get In Touch With Us
                </h2>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
                <div style={{ width: "100%", height: "500px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1315.827619710394!2d76.99841270259655!3d11.079350201706653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7ed6536d507%3A0x375b702346bdd838!2sHoliday%20Residency!5e0!3m2!1sen!2sin!4v1763547801493!5m2!1sen!2sin"
                    allowfullscreen=""
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-lg-0 mt-5 poppins px-lg-5 px-0">
                <div className={`card ${styles.contact_card}`}>
                  <div className="card-body py-4 px-4">
                    <form ref={form} onSubmit={handleSubmit(onsubmit)}>
                      <div className="row">
                        <div className="col-6 mb-3">
                          <label
                            htmlFor="name"
                            className="black-text fs-14 mb-1"
                          >
                            Name
                          </label>
                          <InputField
                            id="name"
                            type={"text"}
                            maxLength={65}
                            validation={{
                              ...register("name", {
                                required: "Name is required",
                              }),
                            }}
                          />
                          <span className="text-danger fs-11">
                            {errors.name && errors.name.message}
                          </span>
                        </div>
                        <div className="col-6 mb-3">
                          <label
                            htmlFor="name"
                            className="black-text fs-14 mb-1"
                          >
                            Email
                          </label>
                          <InputField
                            id="email"
                            type={"text"}
                            maxLength={65}
                            validation={{
                              ...register("email", {
                                required: "Email is required",
                                maxLength: {
                                  value: 60,
                                  message: "Invalid Username",
                                },
                                pattern: {
                                  value:
                                    /[a-z0-9._%+!$&*=^|~#%'`?{}/-]+@([a-z0-9-]+\.){1,}([a-z]{2,16})/,
                                  message: "Invalid Email",
                                },
                              }),
                            }}
                          />
                          <span className="text-danger fs-11">
                            {errors.email && errors.email.message}
                          </span>
                        </div>
                        <div className="col-6 mb-3">
                          <label
                            htmlFor="name"
                            className="black-text fs-14 mb-1"
                          >
                            Phone number
                          </label>
                          <InputField
                            id="phone"
                            type={"text"}
                            maxLength={10}
                            validation={{
                              ...register("phone", {
                                required: "Phone is required",
                                minLength: {
                                  value: 10,
                                  message: "Phone must be at least 10 digits",
                                },
                              }),
                            }}
                            onkeypress={(event) => {
                              keyPress(event, /^-?\d*\.?\d*$/);
                            }}
                          />
                          <span className="text-danger fs-11">
                            {errors.phone && errors.phone.message}
                          </span>
                        </div>
                        <div className="col-6 mb-3">
                          <label
                            htmlFor="company_name"
                            className="black-text fs-14 mb-1"
                          >
                            Company Name
                          </label>
                          <InputField
                            id="company_name"
                            type={"text"}
                            maxLength={65}
                            validation={{
                              ...register("company_name", {
                                required: "Company Name is required",
                              }),
                            }}
                          />
                          <span className="text-danger fs-11">
                            {errors.company_name && errors.company_name.message}
                          </span>
                        </div>
                        <div className="col-6 mb-3">
                          <div>
                            <label
                              htmlFor="no_of_employees"
                              className="black-text fs-14 mb-1"
                            >
                              No of Employees{" "}
                            </label>
                            <div>
                              <Controller
                                id="no_of_employees"
                                control={control}
                                name="no_of_employees"
                                rules={{
                                  required: "No of Employees is required",
                                }}
                                render={({ field }) => (
                                  <Select
                                    key={field.value || null}
                                    append="body"
                                    className={`custom-select ${styles.light_theme}`}
                                    styles={customLightStyles}
                                    classNamePrefix="select"
                                    isClearable={false}
                                    isSearchable={true}
                                    options={employee}
                                    value={employee.find(
                                      (option) => option.value === field.value
                                    )}
                                    onChange={(data) => {
                                      field.onChange(data?.value);
                                    }}
                                  />
                                )}
                              />
                            </div>
                            <span className="text-danger fs-11">
                              {errors.no_of_employees &&
                                errors.no_of_employees.message}
                            </span>
                          </div>
                        </div>
                        <div className="col-6 mb-3">
                          <div>
                            <label
                              htmlFor="service_interest"
                              className="black-text fs-14 mb-1"
                            >
                              Sevice Interest{" "}
                            </label>
                            <div>
                              <Controller
                                id="service_interest"
                                control={control}
                                name="service_interest"
                                rules={{
                                  required: "Service Interest is required",
                                }}
                                render={({ field }) => (
                                  <Select
                                    key={field.value || null}
                                    append="body"
                                    className={`custom-select ${styles.light_theme}`}
                                    styles={customLightStyles}
                                    classNamePrefix="select"
                                    isClearable={false}
                                    isSearchable={true}
                                    options={service}
                                    value={service.find(
                                      (option) => option.value === field.value
                                    )}
                                    onChange={(data) => {
                                      field.onChange(data?.value);
                                    }}
                                  />
                                )}
                              />
                            </div>
                            <span className="text-danger fs-11">
                              {errors.service_interest &&
                                errors.service_interest.message}
                            </span>
                          </div>
                        </div>
                        <div className="col-12 mb-3">
                          <label
                            htmlFor="message"
                            className="black-text fs-14 mb-1"
                          >
                            Message
                          </label>
                          <TextAreaField
                            id="message"
                            type={"text"}
                            maxLength={200}
                            validation={{
                              ...register("message", {
                                required: "Message is required",
                              }),
                            }}
                          />
                          <span className="text-danger fs-11">
                            {errors.message && errors.message.message}
                          </span>
                        </div>
                        <div className="col-12 d-flex">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            className={`me-2`}
                          />
                          <p className={`fs-15 mb-0 fw-500`}>
                            You agree to our friendly{" "}
                            <a href="" className={`text-black fw-400`}>
                              privacy policy
                            </a>
                            .
                          </p>
                        </div>
                        <div className="col-12 mt-4">
                          <button
                            type="submit"
                            className={`btn primary-bg white-text fs-16 rounded-3 fw-400 py-3 px-4 w-100 shadow-none border-0 outline-0`}
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const items = [
  {
    src: "https://picsum.photos/id/123/1200/600",
    altText: "Slide 1",
  },
  {
    src: "https://picsum.photos/id/456/1200/600",
    altText: "Slide 2",
  },
  {
    src: "https://picsum.photos/id/678/1200/600",
    altText: "Slide 3",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const checkFormValidity = () => {
      const allFieldsFilled = Object.values(formData).every(
        (value) => value.toString().trim() !== ""
      );
      const noErrors = Object.values(errors).every((error) => error === "");
      setIsFormValid(allFieldsFilled && noErrors);
    };
    checkFormValidity();
  }, [formData, errors]);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.length < 3) error = "Name must be at least 3 characters";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email format";
        break;
      case "phone":
        if (!value) error = "Phone number is required";
        else if (!value.startsWith("91")) error = "Only Indian numbers allowed";
        else if (value.slice(2).length !== 10)
          error = "Must be 10 digits (e.g. +91 22 1234 5678)";
        break;
      case "serviceType":
        if (!value) error = "Service type is required";
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handlePhoneChange = (value, country) => {
    setFormData((prev) => ({
      ...prev,
      phone: `+${value}`,
    }));

    const error = validateField("phone", value);
    setErrors((prev) => ({
      ...prev,
      phone: error,
    }));

    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Submit logic here (API call, etc.)
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
      });
    }

  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="contact-container content-center">
      <ToastContainer />
      <h1>Get In Touch.</h1>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index}>
              <img
                className="carousel-image"
                src={item.src}
                alt={item.altText}
              />
            </div>
          ))}
        </Slider>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className={errors.name ? "error-input" : ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className={errors.email ? "error-input" : ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="serviceType">Service Type</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={`form-control ${
              errors.serviceType ? "error-input" : ""
            }`}
            required
          >
            <option value="">Select a service type</option>
            <option value="RESIDENTIAL">RESIDENTIAL</option>
            <option value="COMMERCIAL">COMMERCIAL</option>
            <option value="INTERIORS">INTERIORS</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <PhoneInput
            country={"in"}
            onlyCountries={["in"]}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputProps={{
              id: "phone",
              name: "phone",
              required: true,
              className: errors.phone ? "error-input" : "",
              placeholder: errors.phone
                ? "+91 22 1234 5678"
                : "Enter phone number",
            }}
          />
          {errors.phone && (
            <div className="error-hint">Example format: +91 22 1234 5678</div>
          )}
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={!isFormValid}
          title={
            !isFormValid ? "Please fill all required fields correctly" : ""
          }
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

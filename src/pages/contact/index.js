import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";
import validator from "validator";
import Avatar from "react-avatar";
import PhoneInput from "react-phone-input-2";
import { ToastContainer, toast } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const items = [
  {
    src: "/interiors/VINTAGE-CHARM.webp",
    altText: "vintage-charm",
  },
  {
    src: "/LANDSCAPING/C.webp",
    altText: "luxary",
  },
  {
    src: "/COMMERCAIL-INTERIORS/PTG (6).webp",
    altText: "Slide 3",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
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
      else if (!validator.isEmail(value)) error = "Invalid email format";
      break;
    case "phone":
      if (!value) error = "Phone number is required";
      else if (!validator.isMobilePhone(value, "en-IN"))
        error = "Invalid Indian phone number";
      break;
    case "serviceType":
      if (!value) error = "Service type is required";
      break;
    default:
      break;
  }

  setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  return error;
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: `+${value}`,
    }));
    validateField("phone",value);
  };

 const handleSubmit = async(e) => {
   e.preventDefault();
    setLoading(true);

   let hasErrors = false;
   let newErrors = {};

   Object.keys(formData).forEach((field) => {
     const error = validateField(field, formData[field]);
     if (error) {
       newErrors[field] = error;
       toast.error(error, {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
       });
       hasErrors = true;
        setFormData({
            name: "",
            email: "",
            phone: "",
            serviceType: "",
        });
     }
   });

   if (hasErrors) {
     setErrors(newErrors);
     return;
   }

    try {
      const response = await axios.post("/api/contact", formData).then(() =>
        // if (!response.ok) throw new Error("Failed to send email.");

        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      );
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
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
 };


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="contact-container content-center">
      <ToastContainer />
      <h1 className="text-start">Get In Touch.</h1>
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
      <div className="mb-4">
        <h1 className="text-start text-uppercase fs-4 fs-md-3 fs-lg-2">
          General Enquiries
        </h1>
        <h2 className="border-bottom d-inline-block fs-6 fs-md-5 fs-lg-4">
          {`vinay.guptha@videsignstudioz.com`}
        </h2>
      </div>

      <Row>
        <Col xs={12} md={4}>
          <div className="text-center text-md-start">
            <Avatar
              name="Vinay"
              size={250}
              src="/vinay.jpg"
              round
              style={{ filter: "grayscale(100%)" }}
            />
          </div>
        </Col>
        <Col xs={12} md={8}>
         <div className="text-center text-md-start">
            <h2>Vinay Guptha</h2>
            <h6 className="boder border-bottom d-inline-block">
             ARCHITECT & INTERIORS
            </h6>
         </div>
          <div className="contact-content">
            <p>
              {`Vinay Guptha Renowned Architect & Interior Designer | Creating Timeless, Sustainable Spaces.`}
            </p>
            <p>
              {`With over 6 years of diverse experience in Architecture, Interior Design, and Landscape Design, Vinay Guptha is a visionary professional known for crafting aesthetically captivating and environmentally conscious spaces. Driven by a deep passion for meaningful design, he believes in the transformative power of architecture to connect people, inspire communities, and create a lasting positive impact on the world.
              Vinay's work seamlessly blends creativity with functionality, offering clients not just spaces—but experiences that reflect their dreams, values, and future aspirations. Whether it’s a cozy residence, a dynamic workspace, or a serene landscape, his designs are a testament to innovation, sustainability, and human-centric thinking.
              Let your space tell your story—crafted with care, vision & purpose.`}
            </p>
          </div>
        </Col>
      </Row>

      <form className="contact-form mt-3" onSubmit={handleSubmit} noValidate>
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
            <option value="RESIDENTIAL-INTERIORS">RESIDENTIAL INTERIORS</option>
            <option value="COMMERCIAL-INTERIORS">COMMERCIAL INTERIORS</option>
            <option value="ARCHITECTURE">ARCHITECTURE</option>
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
                : "Enter phone number start's with +91",
            }}
          />
          {errors.phone && (
            <div className="error-hint">Example format: +91 22 1234 5678</div>
          )}
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={!isFormValid || loading}
        >
          {loading ? (
            <span className="spinner-border spinner-border-sm text-primary"></span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </section>
  );
}

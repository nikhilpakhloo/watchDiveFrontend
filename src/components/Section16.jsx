import React, { useState } from "react";
import Swal from 'sweetalert2'


const Section16 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referral: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    referral: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const errors = {};
  
    if (!formData.name.trim()) {
      errors.name = "Full Name is required";
      setTimeout(() => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          name: "",
        }));
      }, 3000);
    }
  
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      setTimeout(() => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }, 3000);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Invalid email format";
      setTimeout(() => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }, 3000);
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
      setTimeout(() => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          phone: "",
        }));
      }, 3000);
    } else if (!/^[0-9]+$/.test(formData.phone.trim())) {
      errors.phone = "Phone number must contain only digits";
      setTimeout(() => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          phone: "",
        }));
      }, 3000);
    }
  
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
    

        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
        console.log("Form submitted successfully");
        Swal.fire({
          title: 'Wohoo!!!',
          text: 'Registeration Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          referral: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          confirmButtonColor:"Ok"
      
        });
      }
    } else {
      console.log("Form has errors");
    }
  };
  

  return (
    <section id="contact" className="mt-24 w-full md:px-[150px]">
      <h1 className="JosefinSansBold text-[50px] leading-[60px] text-[#0F1D46] text-center">
        Register now!
      </h1>

      <div className="flex flex-col gap-[20px] mt-6 items-center">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Full Name"
          className={`h-[50px] md:w-full border px-4 rounded-md placeholder:text-[#757575] placeholder:MontserratRegular placeholder:text-[16px] outline-none ${
            formErrors.name ? "border-red-500" : ""
          }`}
        />
        {formErrors.name && (
          <p className="text-red-500">{formErrors.name}</p>
        )}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className={`h-[50px] md:w-full border px-4 rounded-md placeholder:text-[#757575] placeholder:MontserratRegular placeholder:text-[16px] outline-none ${
            formErrors.email ? "border-red-500" : ""
          }`}
        />
        {formErrors.email && (
          <p className="text-red-500">{formErrors.email}</p>
        )}

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          className={`h-[50px] md:w-full border px-4 rounded-md placeholder:text-[#757575] placeholder:MontserratRegular placeholder:text-[16px] outline-none ${
            formErrors.phone ? "border-red-500" : ""
          }`}
        />
        {formErrors.phone && (
          <p className="text-red-500">{formErrors.phone}</p>
        )}

        <input
          type="text"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          placeholder="Referral Code"
          className="h-[50px] md:w-full border px-4 rounded-md placeholder:text-[#757575] placeholder:MontserratRegular placeholder:text-[16px]  outline-none"
        />

        <button
          onClick={handleSubmit}
          className="bg-[#27A6E2] w-[288px] h-[65px] rounded-md flex items-center justify-center"
        >
          <p className="text-[22px] JosefinSansBold leading-[28.8px] text-white">
            Pre-Book My Order
          </p>
        </button>
      </div>
    </section>
  );
};

export default Section16;

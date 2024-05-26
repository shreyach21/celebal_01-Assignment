import React, { useCallback, useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Forms = () => {
  const [allErrors, setAllErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [type, setType] = useState("password");
  //state to store all form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    countryCode: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });
  const countries = [
    { name: "United States", code: 1 },
    { name: "Canada", code: 1 },
    { name: "United Kingdom", code: 44 },
    { name: "Australia", code: 61 },
    { name: "Germany", code: 49 },
    { name: "France", code: 33 },
    { name: "India", code: 91 },
    { name: "China", code: 86 },
    { name: "Japan", code: 81 },
    { name: "Brazil", code: 55 },
    { name: "South Africa", code: 27 },
    { name: "Mexico", code: 52 },
    { name: "Italy", code: 39 },
    { name: "Spain", code: 34 },
    { name: "Russia", code: 7 },
    { name: "Netherlands", code: 31 },
    { name: "South Korea", code: 82 },
    { name: "Saudi Arabia", code: 966 },
    { name: "Sweden", code: 46 },
    { name: "Argentina", code: 54 },
    { name: "Switzerland", code: 41 },
    { name: "Turkey", code: 90 },
    { name: "United Arab Emirates", code: 971 },
    { name: "Norway", code: 47 },
    { name: "New Zealand", code: 64 },
  ];
  const cities = [
    { name: "New York", country_code: 1 }, // United States
    { name: "Los Angeles", country_code: 1 }, // United States
    { name: "Toronto", country_code: 1 }, // Canada
    { name: "London", country_code: 44 }, // United Kingdom
    { name: "Sydney", country_code: 61 }, // Australia
    { name: "Berlin", country_code: 49 }, // Germany
    { name: "Paris", country_code: 33 }, // France
    { name: "Mumbai", country_code: 91 }, // India
    { name: "Delhi", country_code: 91 }, // India
    { name: "Bangalore", country_code: 91 }, // India
    { name: "Chennai", country_code: 91 }, // India
    { name: "Kolkata", country_code: 91 }, // India
    { name: "Hyderabad", country_code: 91 }, // India
    { name: "Beijing", country_code: 86 }, // China
    { name: "Tokyo", country_code: 81 }, // Japan
    { name: "São Paulo", country_code: 55 }, // Brazil
    { name: "Johannesburg", country_code: 27 }, // South Africa
    { name: "Mexico City", country_code: 52 }, // Mexico
    { name: "Rome", country_code: 39 }, // Italy
    { name: "Madrid", country_code: 34 }, // Spain
    { name: "Moscow", country_code: 7 }, // Russia
    { name: "Amsterdam", country_code: 31 }, // Netherlands
    { name: "Seoul", country_code: 82 }, // South Korea
    { name: "Riyadh", country_code: 966 }, // Saudi Arabia
    { name: "Stockholm", country_code: 46 }, // Sweden
    { name: "Buenos Aires", country_code: 54 }, // Argentina
    { name: "Zurich", country_code: 41 }, // Switzerland
    { name: "Istanbul", country_code: 90 }, // Turkey
    { name: "Dubai", country_code: 971 }, // United Arab Emirates
    { name: "Oslo", country_code: 47 }, // Norway
    { name: "Auckland", country_code: 64 }, // New Zealand
  ];
  //validation for each required field
  const validateForm = () => {
    const errors = {};

    errors.firstName = formData.firstName
      ? /^[A-Za-z]{3,15}$/.test(formData.firstName)
        ? ""
        : "First Name must be between 3 and 15 letters with no digits, special characters, or spaces."
      : "First Name is required!";
    errors.lastName = formData.lastName
      ? /^[A-Za-z\s]{3,30}$/.test(formData.lastName)
        ? ""
        : "Last Name must be between 3 and 30 letters with no digits or special characters."
      : "Last Name is required!";
    errors.username = formData.username
      ? /^[A-Za-z0-9#@_]+$/.test(formData.username)
        ? formData.username.length === 10
          ? ""
          : "Username must be exactly 10 characters!"
        : "Username can only contain letters, numbers, and @"
      : "Username is required!";
    errors.email = formData.email
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "Invalid email given!"
      : "Email is required!";
    errors.password = formData.password
      ? /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(
          formData.password
        )
        ? ""
        : "Password must be 8 to 12 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
      : "Password is required!";
    errors.phone = formData.phone
      ? /^\d{10}$/.test(formData.phone)
        ? ""
        : "Phone Number must be a valid 10-digit number."
      : "Phone Number is required!";
    errors.country = formData.country ? "" : "Country is required!";
    errors.city = formData.city ? "" : "City is required!";
    errors.panNo = formData.pan
      ? /[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(formData.pan)
        ? ""
        : "Invalid PAN Number!"
      : "Pan Number is required!";
    errors.aadharNo = formData.aadhar
      ? /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/.test(formData.aadhar)
        ? ""
        : "Invalid Aadhar Number!"
      : "Aadhar Number is required!";
    console.log("values: ", errors);
    return errors;
  };

  //to toggle visibility of password
  useEffect(() => {
    setType(isVisible ? "text" : "password");
  }, [isVisible]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setAllErrors({ ...errors });
    const result = Object.values(errors).every((x) => x === "");
    if (result) {
      console.log("successful");
      navigate("/profile", { state: { formData } }); //navigate on successful submission
    }
  };

  return (
    <div className="w-full min-h-screen pb-9 flex items-center  bg-[#3c3270c2]  flex-col pt-8 text-[#2B2B52] tracking-wider font-sans">
      <h1 className="text-3xl text-center capitalize mb-8 text-[#EAF0F1]">
        Complete your profile
      </h1>
      <form
        className="w-2/3 p-5 sm:flex flex-col md:flex justify-center border border-white-200 shadow-md shadow-white/55 rounded-md bg-white/40 "
        onSubmit={handleSubmit}
      >
        <div className="md:flex justify-between mt-2">
          <div className=" lg:w-[45%] md:w-[35%] sm:w-[90%]">
            <label htmlFor="name" className="text-md capitalize font-medium">
              First Name :&nbsp;
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter first name"
              value={formData.firstName.trim()}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value.trim() })
              }
              className=" py-1 w-full rounded-md pl-2 focus:outline-none text-gray-500 mt-2"
            />
            {allErrors.firstName && (
              <p className="text-red-500 text-sm">{allErrors.firstName}</p>
            )}
          </div>
          <div className="lg:w-[45%] md:w-[35%] sm:w-[90%]">
            <label htmlFor="surname" className="text-md capitalize font-medium">
              Last Name :&nbsp;
            </label>
            <input
              type="text"
              name="surname"
              id="surname"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              placeholder="Enter second name"
              className=" py-1 w-full rounded-md pl-2 focus:outline-none text-gray-500 mt-2"
            />
            {allErrors.lastName && (
              <p className="text-red-500 text-sm">{allErrors.lastName}</p>
            )}
          </div>
        </div>
        <div className="md:flex justify-between mt-6">
          <div className="lg:w-[45%] md:w-[35%] sm:w-[90%]">
            <label htmlFor="email" className="text-md capitalize font-medium">
              Email :&nbsp;
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={formData.email.trim()}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value.trim() })
              }
              className=" py-1 w-full rounded-md pl-2 focus:outline-none text-gray-500 mt-2"
            />
            {allErrors.email && (
              <p className="text-red-500 text-sm">{allErrors.email}</p>
            )}
          </div>
          <div className="lg:w-[45%] md:w-[35%] sm:w-[90%]">
            <label htmlFor="phone" className="text-md capitalize font-medium">
              Contact No. :&nbsp;
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter phone no."
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className=" py-1 w-full rounded-md pl-2 focus:outline-none text-gray-500 mt-2"
            />
            {allErrors.phoneNo && (
              <p className="text-red-500 text-sm">{allErrors.phoneNo}</p>
            )}
          </div>
        </div>
        <div className="md:flex justify-between mt-6">
          <div className=" lg:w-[45%] md:w-[35%] sm:w-[90%]">
            <label
              htmlFor="username"
              className="text-md capitalize font-medium"
            >
              create username :&nbsp;
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="Enter username..."
              className=" py-1 w-full rounded-md pl-2 focus:outline-none text-gray-500 mt-2"
            />
            {allErrors.username && (
              <p className="text-red-500 text-sm">{allErrors.username}</p>
            )}
          </div>
          <div className="lg:w-[45%] md:w-[35%] sm:w-[90%]">
            <label
              htmlFor="password"
              className="text-md capitalize font-medium"
            >
              create password:&nbsp;
            </label>
            <div className="flex justify-between relative">
              <input
                type={type}
                name="password"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter password..."
                className=" py-1 w-full rounded-md pl-2 focus:outline-none text-gray-500 mt-2"
              />
              <span
                onClick={() => setIsVisible((prev) => !prev)}
                className="mr-2 absolute right-0 top-1/2 -translate-y-1"
              >
                {isVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
            {allErrors.password && (
              <p className="text-red-500 text-sm">{allErrors.password}</p>
            )}
          </div>
        </div>
        <div className="md:flex justify-between mt-6">
          <div className="md:w-[30%] sm:w-[80%]">
            <label htmlFor="code" className="text-md capitalize font-medium">
              Country Code :&nbsp;
            </label>
            <input
              type="number"
              name="code"
              id="code"
              value={formData.countryCode}
              placeholder="Enter country code"
              onChange={(e) =>
                setFormData({ ...formData, countryCode: e.target.value })
              }
              className=" py-1 w-full rounded-md pl-2 focus:outline-none text-gray-500 mt-2"
            />
          </div>
          <div className="md:w-[30%] sm:w-[80%]">
            <label htmlFor="country" className="text-md capitalize font-medium">
              Country :&nbsp;
            </label>
            <select
              name="country"
              id="country"
              className="py-1 w-full rounded-md pl-2 focus:outline-none
                 text-gray-500 mt-2"
              value={formData.country}
              onChange={(e) => {
                const country = countries.find(
                  (country) => country.name === e.target.value
                );
                setFormData({
                  ...formData,
                  country: country.name,
                  countryCode: country.code,
                });
              }}
            >
              <option value="" disabled>
                Select Country
              </option>
              {...countries?.map(({ name, code }, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
            {allErrors.country && (
              <p className="text-red-500 text-sm">{allErrors.country}</p>
            )}
          </div>
          <div className="md:w-[30%] sm:w-[80%]">
            <label htmlFor="city" className="text-md capitalize font-medium">
              City :&nbsp;
            </label>
            <select
              name="city"
              id="city"
              className=" py-1 w-full rounded-md pl-2
              focus:outline-none text-gray-500 mt-2"
              value={formData.city}
              onChange={(e) => {
                const city = cities.find(
                  (city) => city.name === e.target.value
                );
                const country = countries.find(
                  (country) => country.code === city.country_code
                );
                setFormData({
                  ...formData,
                  city: city.name,
                  countryCode: city.country_code,
                  //   country:country.code,
                  country: country.name,
                });
              }}
            >
              <option value="" disabled>
                Select City
              </option>
              {cities?.map(({ name, country_code }, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
            {allErrors.city && (
              <p className="text-red-500 text-sm">{allErrors.city}</p>
            )}
          </div>
        </div>
        <div className="md:flex justify-between mt-6">
          <div className=" lg:w-[45%] md:w-[35%] sm:w-[90%]">
            <label htmlFor="pan" className="text-md capitalize font-medium">
              PAN Number :&nbsp;
            </label>
            <input
              type="text"
              name="pan"
              id="pan"
              placeholder="(e.g., ABCDE1234F)"
              value={formData.pan}
              onChange={(e) =>
                setFormData({ ...formData, pan: e.target.value })
              }
              className=" py-1 w-full rounded-md pl-2 focus:outline-none text-gray-500 mt-2"
            />
            {allErrors.panNo && (
              <p className="text-red-500 text-sm">{allErrors.panNo}</p>
            )}
          </div>
          <div className="lg:w-[45%] md:w-[35%] sm:w-[90%]">
            <label htmlFor="aadhar" className="text-md capitalize font-medium">
              Aadhar Number :&nbsp;
            </label>
            <input
              type="text"
              name="aadhar"
              id="aadhar"
              value={formData.aadhar}
              onChange={(e) =>
                setFormData({ ...formData, aadhar: e.target.value })
              }
              placeholder="(e.g., 1234 5678 9012)"
              className=" py-1 w-full rounded-md pl-2 focus:outline-none text-gray-500 mt-2"
            />
            {allErrors.aadharNo && (
              <p className="text-red-500 text-sm">{allErrors.aadharNo}</p>
            )}
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            className="py-2  bg-[#3c3270c2]  cursor-pointer w-1/3 text-white rounded-md hover:bg-[#3c3270f8] duration-300 text-lg tracking-wider mx-auto mt-8 shadow-md hover:shadow-white/30"
            type="submit"
            disabled={!validateForm()} //submission disabled until form is validated.
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;

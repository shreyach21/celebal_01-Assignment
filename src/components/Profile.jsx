import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
const Profile = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  const navigate = useNavigate();
  if (!formData)
    return (
      <div className=" pt-10">
        <p className="text-xl text-center">No data found!</p>
        <div className="text-center">
          <button
            className="px-6 py-2 text-lg bg-[#332384] cursor-pointer hover:bg-[#332384b2] duration-300 rounded-md w-1/4"
            onClick={navigate("/")}
          >
            Complete your profile
          </button>
        </div>
      </div>
    );
  else {
    console.log("Profile data: ", formData);
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#8B78E6]">
      <div className="flex flex-col items-center  text-start text-xl py-10 w-1/2 mx-auto tracking-wider bg-white/90 text-gray-900 rounded-lg shadow-md shadow-white/55">
        <h1 className="text-4xl mb-10">Profile Details</h1>
        <p className="mb-2">
          Full Name: {formData.firstName}&nbsp;{formData.lastName}
        </p>
        <p className="mb-2">Email: {formData.email}</p>
        <p className="mb-2">Username: {formData.username}</p>
        <p className="mb-2">Password: {formData.password}</p>
        <p className="mb-2">Contact Number: {formData.phone}</p>
        <p className="mb-2">PAN Number: {formData.pan}</p>
        <p className="mb-2">Aadhar Number: {formData.aadhar}</p>
        <p className="mb-2">
          Country: {formData.country} (Code: {formData.countryCode})
        </p>
        <p className="mb-2">City: {formData.city}</p>
      </div>
    </div>
  );
};

export default Profile;

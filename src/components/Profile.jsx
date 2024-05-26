import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const Profile = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  const navigate = useNavigate();

  if (!formData)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen w-full">
        <p className="text-xl text-center w-full">No data found!</p>
        <div className="text-center mt-4 w-full">
          <button
            className="px-6 py-2 text-lg bg-[#332384eb] cursor-pointer hover:bg-[#332384b2] duration-500 rounded-md sm:w-2/3  text-white hover:scale-x-105 md:w-1/2"
            onClick={() => navigate("/")}
          >
            <div className="flex justify-center items-center w-full">
              <FaArrowLeft className="mr-5" />
              <span className="capitalize">Complete your profile</span>
            </div>
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
      <div className="flex flex-col items-center text-start text-xl py-10 w-3/5 mx-auto tracking-wider bg-white/90 text-gray-900 rounded-lg shadow-md shadow-white/55 font-semibold">
        <h1 className="text-4xl mb-8">Profile Details</h1>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto bg-white ">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Full Name</td>
                <td className="px-4 py-2">
                  {formData.firstName} {formData.lastName}
                </td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">Email</td>
                <td className="px-4 py-2">{formData.email}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Username</td>
                <td className="px-4 py-2">{formData.username}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">Password</td>
                <td className="px-4 py-2">{formData.password}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Country</td>
                <td className="px-4 py-2">
                  {formData.country} (Code: {formData.countryCode})
                </td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">City</td>
                <td className="px-4 py-2">{formData.city}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Contact Number</td>
                <td className="px-4 py-2">{formData.phone}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">PAN Number</td>
                <td className="px-4 py-2">{formData.pan}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Aadhar Number</td>
                <td className="px-4 py-2">{formData.aadhar}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;

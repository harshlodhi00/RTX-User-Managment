import React, { useState } from "react";
import { addUser } from "../redux/slices/UserSlice";
import { useDispatch } from "react-redux";

const AddUser = () => {
  const dispatch = useDispatch();

  const [userDetail, setUserDetail] = useState({
    fullName: "",
    email: "",
    gender: "",
    mobile: "",
    about: "",
  });

  const handleInputChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userDetail));
    setUserDetail({
      fullName: "",
      email: "",
      gender: "",
      mobile: "",
      about: "",
    });
  };

  return (
    <div className="addUserForm">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={userDetail.fullName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={userDetail.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile No.</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            value={userDetail.mobile}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            name="gender"
            value={userDetail.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">About</label>
          <input
            type="text"
            className="form-control"
            name="about"
            value={userDetail.about}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;

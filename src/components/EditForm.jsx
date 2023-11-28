import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/UserSlice";

const EditForm = ({ user, setIsEdit }) => {
  const dispatch = useDispatch();

  const [userDataEdit, setUserDataEdit] = useState(user);

  const handleInputChange = (e) => {
    setUserDataEdit({ ...userDataEdit, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(userDataEdit));
    setIsEdit(false);
  };

  return (
    <form onSubmit={handleFormSubmit} className="m-5">
      <h1>Edit Information</h1>
      <br />
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          name="fullName"
          value={userDataEdit.fullName}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Mobile No.</label>
        <input
          type="text"
          className="form-control"
          name="mobile"
          value={userDataEdit.mobile}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Gender</label>
        <select
          className="form-select"
          name="gender"
          value={userDataEdit.gender}
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
          value={userDataEdit.about}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default EditForm;

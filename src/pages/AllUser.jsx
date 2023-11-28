import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { removeUser } from "../redux/slices/UserSlice";
import UserModal from "../components/UserModal";
import EditForm from "../components/EditForm";

const AllUser = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user);

  const [isOpenModel, setIsOpenModel] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [viewUser, setViewUser] = useState([]);
  const [editUser, setEditUser] = useState([]);

  const handleView = (user) => {
    setIsOpenModel(true);
    setViewUser(user);
  };

  const handleEdit = (user) => {
    setIsEdit(true);
    setEditUser(user);
  };

  return (
    <div>
      <Navbar />

      {isEdit ? (
        <EditForm user={editUser} setIsEdit={setIsEdit} />
      ) : isOpenModel ? (
        <UserModal user={viewUser} setIsOpenModel={setIsOpenModel} />
      ) : (
        <div className="row row-cols-3">
          {allUsers.map((user) => {
            return (
              <div className="card col" key={user.fullName}>
                <div className="card-body pb-1">
                  <h4 className="card-title">{user.fullName}</h4>
                  <p className="mb-1 mt-1 small">{user.email}</p>
                </div>
                <div>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => handleView(user)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => dispatch(removeUser(user))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllUser;

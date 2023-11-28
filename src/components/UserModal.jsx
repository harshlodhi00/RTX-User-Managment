import React from "react";

const UserModal = ({ user, setIsOpenModel }) => {
  console.log(user);

  const handleClose = () => {
    setIsOpenModel(false);
  };

  return (
    <div className="user-modal">
      <div className="modal-content">
        <button className="btn btn-danger m-2" onClick={handleClose}>
          X
        </button>
        <h1>{user.fullName}</h1>
        <p>{user.about}</p>
      </div>
    </div>
  );
};

export default UserModal;

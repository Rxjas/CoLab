import React from "react";
import UserModal from "../UserModal";

const Sidebar = () => {
  const displayUser = () => {
    // display UserModal
  };

  return (
    <>
      <div id="userModal">{UserModal}</div>
      <div id="user">
        <h3>I am a...</h3>
        <div id="autopop"
          onClick={displayUser}
        ></div>
      </div>
      <div id="seeking">
        <h3>looking to CoLaborate with...</h3>
        <div id="filters">
          <div id="filter1">placeholder element, replace with whatever is most appropriate</div>
          <div id="filter2">placeholder element, replace with whatever is most appropriate</div>
          <div id="filter3">placeholder element, replace with whatever is most appropriate</div>
          <div id="filter4">placeholder element, replace with whatever is most appropriate</div>
          <div id="filter5">placeholder element, replace with whatever is most appropriate</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
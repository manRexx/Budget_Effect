import React from "react";

function SidebarItem({ name, active, handleClick }) {
  return (
    <div>
      <button
        className={`sidebar__item ${active ? "active" : " "}`}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
}

export default SidebarItem;

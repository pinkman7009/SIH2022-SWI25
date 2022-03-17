import React from "react";
import { NavLink } from "react-router-dom";

const NestedNav = ({ links }) => {
  return (
    <>
      {links.map((link, index) => {
        return (
          <NavLink to={link.route} activeClassName="active" key={index}>
            <div className="mx-6 my-3 cursor-pointer hover:bg-secondary p-1">
              <p className="text-sm">{link.title}</p>
            </div>
          </NavLink>
        );
      })}
    </>
  );
};

export default NestedNav;

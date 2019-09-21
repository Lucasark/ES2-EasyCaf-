import React from "react";
import { NavLink } from "react-router-dom";

export default props => {
  console.log(props.history)
  return (
    <div
      id="sidebar"
      className="sidebar"
      data-color="purple"
    >
      <div className="logo">
        <a>Medico</a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          {props.routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li key={key} style={{width:"100%", textAlign: "center"}}>
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}

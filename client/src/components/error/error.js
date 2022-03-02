import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="ErrorPage">
    <h1 className="error">Oh! My! Gawd! page found!</h1>
    <NavLink name='piviot' to='/'>PIVIOT!</NavLink>
  </div>
  )
}
export default Error

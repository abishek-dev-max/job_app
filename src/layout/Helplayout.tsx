import { Outlet,NavLink } from "react-router-dom";
export default function Helplayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
        dignissimos, fugit at nihil cum nesciunt consectetur enim rerum illum
        dolore saepe in eveniet distinctio magni sequi ducimus! Nemo, illo
        repudiandae.
      </p>
      <nav>
        <NavLink to="FAQ">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

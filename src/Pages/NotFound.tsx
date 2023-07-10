import {  NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        impedit. Temporibus dolorum error assumenda accusantium. Consequatur,
        est sint numquam nam, possimus corporis repudiandae deleniti nihil saepe
        temporibus asperiores, incidunt fugiat?
      </p>
      <p>Go to the <NavLink to='/'>HomePage</NavLink></p>
    </div>
  );
}

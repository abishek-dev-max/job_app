import { Outlet } from "react-router-dom";

export function Careerslayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
        explicabo! Facilis tempore natus cupiditate nobis consequatur voluptatem
        esse necessitatibus reprehenderit, modi rerum minima ex sed a dolores
        consectetur asperiores id.
      </p>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

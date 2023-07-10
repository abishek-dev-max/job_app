import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
  NavLink,
  Routes,
} from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Careers, { careersLoader } from "./Pages/Careers/Careers";
import CareerDetails, {
  CareerDetailsLoader,
} from "./Pages/Careers/CareerDetails";
import Faq from "./Pages/Help/FAQ";
import Contact from "./Pages/Help/Contact";
import NotFound from "./Pages/NotFound";

//layout
import { Careerslayout } from "./layout/Careerslayout";
import RootLayout from "./layout/Rootlayout";
import Helplayout from "./layout/Helplayout";
import CareersError from "./Pages/Careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="help" element={<Helplayout></Helplayout>}>
        <Route path="FAQ" element={<Faq></Faq>}>
          Faq
        </Route>
        <Route path="contact" element={<Contact></Contact>}>
          Contact
        </Route>
      </Route>
      <Route
        path="careers"
        element={<Careerslayout></Careerslayout>}
        errorElement={<CareersError></CareersError>}
      >
        <Route
          index
          loader={careersLoader}
          element={<Careers></Careers>}
        ></Route>
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={CareerDetailsLoader}
        ></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <main className="bg-[var(--secondary)] text-white h-screen">
        <RouterProvider router={router}></RouterProvider>
      </main>
      {/* <BrowserRouter> */}
      {/* <header>
          <nav>
            <h1>Jobarouter</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
          </nav>
        </header> */}
      {/* <main> */}
      {/* <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

        </Routes> */}
      {/* </main> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

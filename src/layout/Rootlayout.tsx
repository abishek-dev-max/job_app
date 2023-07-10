import { NavLink,Outlet } from "react-router-dom";

export default function RootLayout() {
return (
    <div className="root-layout">
    <header className="w-screen bg-[var(--secondary)] text-white p-3">
        <nav
        dir="ltr"
        className="flex gap-2 justify-end max-w-1200 mx-auto me-8"
        >
        <h1 className="mr-auto border-b-2 border-[var(--primary)] ms-8">
            JobPortal
        </h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        </nav>
    </header>
    <main>
        <Outlet></Outlet>
    </main>
    </div>
);
}

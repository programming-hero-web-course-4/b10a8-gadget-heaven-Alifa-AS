import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="min-h-[calc(100vh-232px)] py-12"></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Layout from "../../Layout/Layout";

const Root = () => {
    return (
        <Layout>
            <div className="container mx-auto">
            <Navbar></Navbar>
            
            <div className="min-h-[calc(100vh-410px)] pb-12">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </Layout>
    );
};

export default Root;
import React from "react";
import Header from "./Header";
import FoodCategorey from "./FoodCategorey";
import Footer from "../Footer";
import ProductLists from "./ProductLists";
import { Link } from "react-router-dom";


const Orderonline = () => {
  return (
    <>
    <Header/>
    <FoodCategorey/>
    <Footer/>
    <Link to='/orderonline/productlist/' >
    <ProductLists></ProductLists>
    </Link>
    
    </>
  );
};

export default Orderonline;

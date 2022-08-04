import React from "react";

//components
import Navbar from "../../components/shared/navbar";
import Titr from "../../components/shared/titr";
import Stote from "../../components/sections/store";
import Footer from "../../components/shared/footer";
import Categories from "../../components/sections/categories";
import Home from "../../components/sections/home";


const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Titr title="دسته بندی های فروشگاه" />
      <Categories />
      <Titr title="نهال های ما" />
      <Stote />
      <Footer />
    </>
  );
};

export default Landingpage;

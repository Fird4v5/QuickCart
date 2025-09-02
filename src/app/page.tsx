import HeaderSlider from "@/HeaderSlider";
import HomeProducts from "@/HomeProducts"; 
import Banner from "@/Banner";
import FeaturedProduct from "@/FeaturedProduct";
import Navbar from "@/Navbar";
import Footer from "@/Footer";
import NewsLetter from "@/NewsLetter";


const Home = () => {
  return (
    <> 
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  )
}

export default Home



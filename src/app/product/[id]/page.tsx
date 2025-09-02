import { useAppContext } from "@/AppContext";
import Loading from "@/Loading";
import Navbar from "@/Navbar";
import type { Product } from "@/types";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

const Product = () => {

  const { id } = useParams(); 

  const { products, router, addToCart } = useAppContext();

  const [mainImage, setMainImage] = useState<string | null>(null);  
  const [productData, setProductData] = useState<Product | null>(null);

  const fetchProductData = async () => {
    const product = products.find(product => product._id === id); 
    if (!product) return null; 
    setProductData(product);
  }

  useEffect(() => {
    fetchProductData(); 
  }, [id, products.length])

  return productData ? (
    <>
    <Navbar />
    <div>
        <div>
            <div>

            </div>
        </div>
    </div>
    </>
  ): <Loading />
}

export default Product
import React, { useEffect, useState } from "react";
import MainLayouts from "../Layouts/MainLayout";
import Products from "../Products/products";
import { readProduts } from "../../service/api"
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái loading

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await readProduts()
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Đặt trạng thái loading thành false sau khi lấy dữ liệu
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Hiển thị khi đang tải dữ liệu
  }

  return (
    <MainLayouts>
      <div className="page-heading" id="top">
        <div className="container">
          <div>
            <Products products={products} />
          </div>
          {/* <div className="row">
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
          </div> */}
        </div>
      </div>
    </MainLayouts>
  );
};

export default Home;

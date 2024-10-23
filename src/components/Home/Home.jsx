import React, { useEffect } from "react";
import MainLayouts from '../Layouts/MainLayout';
// import axios from "axios";

const Home = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true); // Trạng thái loading

  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:3000/api/products"); // Thay đổi URL nếu cần
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.error("Error fetching products:", error);
    //   } finally {
    //     setLoading(false); // Đặt trạng thái loading thành false sau khi lấy dữ liệu
    //   }
    // };
    // fetchProducts();
  }, []);

  return (
    <MainLayouts>
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
             <div class="col-sm">One of three columns</div>
          </div>
          <div className="row">
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
             <div class="col-sm">One of three columns</div>
          </div>
          <div className="row">
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
             <div class="col-sm">One of three columns</div>
          </div>
          <div className="row">
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
             <div class="col-sm">One of three columns</div>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Home;

import React from "react";
const Products = ({ products }) => {
  return (
      <div className="row">
        {products.map((product, index) => (
          <div className="col-sm-3" key={index}>
            <div className="card" style={{ marginBottom: "30px" }}>
              <img
                src={product.Image}
                className="card-img-top"
                alt={product.TenSanPham}
              />
              <div className="card-body">
                <h5 className="card-title">{product.TenSanPham}</h5>
                <p className="card-text">
                  Giá: {product.Gia.toLocaleString()} VNĐ
                </p>
                <p className="card-text">Số lượng: {product.SoLuong}</p>
                <a href="#" className="btn btn-primary">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Products;

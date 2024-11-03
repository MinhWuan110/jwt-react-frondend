import React from "react";
import MainLayout from "../Layouts/MainLayout";
import useAuthCheck from "../useAuthCheck";

function News() {
  // kiểm tra người dùng nào đã đăng nhập rồi nêú chưa đăng nhập thì đá ra trang login
  useAuthCheck();
  return (
    <MainLayout>
      {/* <div id="page-wrapper">
        &lt; class="container mt-5"&gt;
        <h1>Quản lý Danh mục tin tức </h1>
        @if (session('success'))
        <div className="alert alert-success">
          {"{"}
          {"{"} session('success') {"}"}
          {"}"}
        </div>
        @endif
        <form
          action="{{ route('create.catories') }}"
          method="POST"
          className="mb-4"
        >
          @csrf
          <div className="form-group">
            <label htmlFor="ten_tin_tuc">Tên danh mục</label>
            <input
              type="text"
              className="form-control"
              id="ten_tin_tuc"
              name="ten_tin_tuc"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="trang_thai">Trạng thái</label>
            <input
              type="number"
              className="form-control"
              id="trang_thai"
              name="trang_thai"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="noi_dung">Nội dung</label>
            <textarea
              className="form-control"
              id="noi_dung"
              name="noi_dung"
              defaultValue={""}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Thêm danh mục
          </button>
        </form>
        <div>
          <form action="{{ route('search.catories') }}" method="GET">
            <br />
            <label>Tìm kiếm theo tên tin tức </label>
            <br />
            <input
              type="text"
              name="query"
              placeholder="Tìm kiếm danh mục..."
              required=""
            />
            <button type="submit" className="btn btn-primary">
              Tìm kiếm
            </button>
            <a href="{{ route('admin.catories') }}" className="btn btn-success">
              Hiển thị tất cả{" "}
            </a>
          </form>
        </div>
        <h2>Danh sách Danh mục</h2>
        @foreach ($catories as $category) @endforeach
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên danh mục</th>
              <th>Trạng thái</th>
              <th>Nội dung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {"{"}
                {"{"} $category-&gt;id {"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"} $category-&gt;ten_tin_tuc {"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"} $category-&gt;trang_thai {"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"} $category-&gt;noi_dung {"}"}
                {"}"}
              </td>
              <td>
                {" "}
                <a
                  href="{{ route('edit.catories', $category->id) }}"
                  className="btn btn-warning"
                >
                  Chỉnh sửa
                </a>
              </td>
              <td>
                <form
                  action="{{ route('delete.catories', $category->id) }}"
                  method="POST"
                  style={{ display: "inline" }}
                >
                  @csrf @method('DELETE')
                  <button type="submit" className="btn btn-danger">
                    Xóa
                  </button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <h1> đây la nôi dung trang news</h1>
    </MainLayout>
  );
}

export default News;

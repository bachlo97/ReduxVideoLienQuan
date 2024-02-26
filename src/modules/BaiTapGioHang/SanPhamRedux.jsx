import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div className="card text-white bg-primary">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          width={150}
          height={250}
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button onClick={()=>{this.props.themGioHang(sanPham)}}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}

//Xây dựNg hàm tạo ra prop là hàm xử lý sự kiện => đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    //Tạo ra props component (là function => đưa dữ liệu lên store)
    themGioHang: (sanPham) => {
      const spGioHang = {
        ...sanPham,
        soLuong: 1,
      };
      //Tạo action đưa dữ liệu lên reducer
      const action = {
        type: "THEM_GIO_HANG", //bắt buộc đặt type
        spGioHang: spGioHang, //Nội dung gửi lên reducer
      };
      console.log(action)
      //Dùng hàm dispatch đƯa dữ liệu action lên reducer
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPhamRedux);

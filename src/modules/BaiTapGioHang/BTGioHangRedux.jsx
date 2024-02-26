import React, { Component } from "react";
import ModalGioHangRedux from "./ModalGioHangRedux";
import DanhSachSanPhamRedux from "./DanhSachSanPhamRedux";

//import thư viện connect kết nối react component và redux store
import { connect } from "react-redux";
// import { rootReducer } from "../../redux/rootReducer";

class BTGioHangRedux extends Component {
  rederSoLuong = () =>{
    return this.props.gioHang.reduce((tongSoLuong,spGH,index)=>{
      return tongSoLuong += spGH.soLuong
    },0);
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-danger text-center">Bài tập giỏ hàng redux</h3>
        <div className="text-right">
          <span>Giỏ hàng: <i>({this.rederSoLuong()})</i></span>
        </div>
        <ModalGioHangRedux />
        <DanhSachSanPhamRedux/>
      </div>
    );
  }
}

//Viết hàm lấy giá trị từ redux store và biến thành props component
const mapStateToProps = (rootReducer) =>{
  return {
    gioHang: rootReducer.GioHangReducer.gioHang
  }
}

export default connect(mapStateToProps)(BTGioHangRedux)
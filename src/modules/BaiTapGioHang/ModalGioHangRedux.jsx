import React, { Component } from "react";

//Kết nối redux (connect hàm kết nối reactComponent-reduxStore)
import { connect } from "react-redux";
class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} width={50} height={75} alt="" />
          </td>
          <td>{spGH.giaBan}</td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(index, true);
              }}
            >
              +
            </button>
            {spGH.soLuong}{" "}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(index, false);
              }}
            >
              -
            </button>
          </td>
          <td>{spGH.soLuong * spGH.giaBan}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHangIndex(index);
              }}
              className="btn btn-danger"
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    //this.props.gioHang là thuộc tính nhận từ redux
    console.log(this.props.gioHang);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã sp</th>
              <th>Tên sp</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <tr>
              <td colSpan='5'></td>
              <td>Tổng tiền</td>
              <td>{this.props.gioHang.reduce((tongTien,spGioHang,index)=>{
                return tongTien +=spGioHang.soLuong*spGioHang.giaBan
              },0)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //state là store tổng, =>Truy xuất đến GioHangReducer => biến state trên GioHangReducer

  return {
    gioHang: state.GioHangReducer.gioHang, //=>tạo ra 1 props của component ModalGioHangRedux
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHangIndex: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      console.log("xoa gio hang", action);
      //Đưa action lên reducer
      dispatch(action);
    },
    tangGiamSoLuong: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SL",
        index,
        tangGiam,
      };
      dispatch(action)
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
//Hàm connect trong react-redux được sử dụng để tạo ra một higher-order component (HOC) có khả năng truy cập các trạng thái và hành động từ Redux store.

//Hàm connect có thể nhận vào hai đối số, đối số đầu tiên là một hàm mapStateToProps, và đối số thứ hai là một hàm mapDispatchToProps. Trong trường hợp của bạn, bạn chỉ truyền vào mapStateToProps và để mapDispatchToProps là null.

//mapStateToProps: Là một hàm nhận vào trạng thái của Redux store và trả về một đối tượng, trong đó các thuộc tính của đối tượng sẽ được chuyển thành props của component. Nó giúp component truy cập thông tin từ Redux store.

//mapDispatchToProps: Là một hàm nhận vào các hành động và trả về một đối tượng, trong đó các phương thức của đối tượng sẽ được chuyển thành props của component. Nó giúp component gửi các hành động đến Redux store.

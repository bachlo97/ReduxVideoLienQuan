import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
          <div className="display-5">
            BẠN CHỌN: <span className="text-danger">{this.props.taiXiu ? 'TÀI':'XỈU'}</span>
          </div>
          <div className="display-5">
            BÀN THẮNG: <span className="text-success">{this.props.soBanThang}</span>
          </div>
          <div className="display-5">
            TỔNG SỐ BÀN CHƠI: <span className="text-primary">{this.props.tongSoBanChoi}</span>
          </div>
      </div>
    );
  }
}

const mapStateToProps = rootReducer =>{
    return {
        soBanThang: rootReducer.gameXucXacReducer.soBanThang,
        tongSoBanChoi: rootReducer.gameXucXacReducer.tongSoBanChoi,
        taiXiu: rootReducer.gameXucXacReducer.taiXiu,
    }
}

export default connect (mapStateToProps)(ThongTinTroChoi)

import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            style={{ transform: "rotate(120deg)" }}
            className="mt-3"
            width={35}
            height={35}
            src={this.props.mangDatCuoc.find(item=>item.datCuoc).hinhAnh}
            alt="bua.png"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          width={150}
          height={150}
          src="./img/gameOanTuTi/player.png"
          alt="player.png"
        />

        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {

            // xét giá trị đặt cược thêm viền cho item được chọn
            let border = {}
            if(item.datCuoc){
                border = {border: '3px solid orange'}
            }
            return (
              <div className="col-4" key={index}>
                <button onClick={()=>{this.props.datCuoc(item.ma)}} className="btnItem" style={border}>
                  <img
                    width={35}
                    height={35}
                    src={item.hinhAnh}
                    alt="bao.png"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.OanTuTiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    datCuoc: (maCuoc)=>{
      dispatch({
        type: 'CHON_KEO_BUA_BAO',
        maCuoc
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);

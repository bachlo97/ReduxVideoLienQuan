import React, { Component } from "react";
import "./BaiTapGameXucXac.css";
import XucXac from "./XucXac";
import ThongTinTroChoi from "./ThongTinTroChoi";
import { connect } from "react-redux";
class BaiTapGameXucXac extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">
          Game đổ xúc xắc
        </div>
        <div className="row text-center mt-2">
          <div className="col-5">
            <button onClick={() => {
                this.props.datCuoc(true)
            }} className="btnGame">
              TÀI
            </button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          <div className="col-5">
            <button onClick={() => {
                this.props.datCuoc(false)
            }} className="btnGame">
              XỈU
            </button>
          </div>
        </div>
        <div className="thongtintrochoi text-center">
          <ThongTinTroChoi />
          <button className="btn btn-success p-2 mt-5 display-1" onClick={()=>{this.props.playGame()}}>
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
        const action = {
            type:'DAT_CUOC',
            taiXiu,
        }
        dispatch(action)
    },
    playGame: ()=>{
        dispatch( {
            type:'PLAY_GAME'
        })
    }
  };
};
export default connect(null, mapDispatchToProps)(BaiTapGameXucXac);

import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
      0% {top:-20px;}
      25% {top:15px}
      50% {top:-20px}
      75% {top: 15px}
      75% {top: 0}
  }`;
    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            style={{
              transform: "rotate(120deg)",
              animation: `randomItem${Date.now()} 1s`,
              position:'absolute',
              left: '30%',
              overflow:'hidden'
            }}
            className="mt-3"
            width={35}
            height={35}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          width={150}
          height={150}
          src="./img/gameOanTuTi/playerComputer.png"
          alt="player.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.OanTuTiReducer.computer,
  };
};
export default connect(mapStateToProps)(Computer);

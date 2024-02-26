import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {

  renderXucXac = ()=>{
    return this.props.mangXucXac.map((xucXac,index)=>{
      return(
        <img key={index}
        className="ms-2"
        style={{ width: 50, height: 50 }}
        src={xucXac.hinhAnh}
        alt={`${xucXac.ma}.png`}
      />
      )

    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.renderXucXac()}
      </div>
    );
  }
}


const mapStateToProps = rootReducer =>{
  return{
    mangXucXac: rootReducer.gameXucXacReducer.mangXucXac,
  }
}

export default  connect(mapStateToProps)(XucXac);
